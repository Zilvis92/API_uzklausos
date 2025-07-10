const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {
    const res = await axios.get('http://195.14.173.10:3000/naujienos/' + id);
    const post = await res.data;

    const template = `
        <div class="post">
            <p>${post.id}</p>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        </div>
    `;
    container.innerHTML = template; 
}

window.addEventListener('DOMContentLoaded', () => renderDetails());