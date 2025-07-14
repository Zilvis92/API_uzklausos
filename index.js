import { newsTitle } from './components/newsTitle.js';

window.addEventListener('DOMContentLoaded', () => renderPosts());

const container = document.querySelector('.container');

const renderPosts = async () => {
    let uri = 'http://195.14.173.10:3000/naujienos';

    const res   = await axios.get(uri);
    const posts = await res.data;

    let template = '';

    posts.forEach(post => {
        template += `
            <div class="bg-white rounded shadow p-6 border">
                ${newsTitle(post.title, 2)}
                <p class="text-gray-700 mt-2">${post.content.slice(0, 200)}...</p>
                <a 
                    href="details.html?id=${post.id}" 
                    class="inline-block mt-4 text-blue-600 hover:underline font-medium"
                >
                    Skaityti plačiau
                </a>
            </div>
        `;
    })
    container.innerHTML = template;
}


// <h2 class="text-xl font-bold text-blue-700">${post.title}</h2>