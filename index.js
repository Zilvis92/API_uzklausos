window.addEventListener('DOMContentLoaded', () => renderPosts());

const container = document.querySelector('.container');

const renderPosts = async () => {
    let uri = 'http://195.14.173.10:3000/naujienos';

    const res   = await axios.get(uri);
    const posts = await res.data;

    let template = '';

    posts.forEach(post => {
        template += `
        <div class="post">
            <p>${post.id}</p>
            <h2>${post.title}</h2>
            <p>${post.content.slice(0, 200)}</p>
            <button class="btn">Skaityti plačiau</button>
        </div>
        `;
    })
    container.innerHTML = template;
}