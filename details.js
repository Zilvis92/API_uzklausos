import { newsTitle } from './components/newsTitle.js'

const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {
    try {
        const res = await axios.get('http://195.14.173.10:3000/naujienos/' + id);
        const post = res.data;

        const template = `
            <div class="bg-white rounded shadow p-6 border max-w-3xl mx-auto mt-10">
                ${newsTitle(post.title)}
                <p class="text-gray-800 mt-4 text-lg">${post.content}</p>
                <a href="index.html" class="block mt-6 text-blue-500 hover:underline">← Grįžti atgal</a>
            </div>
        `;
        container.innerHTML = template; 
    } catch (err) {
        container.innerHTML = `<p class="text-red-500 text-center mt-10">Naujiena nerasta.</p>`;
        console.error('Klaida įkeliant naujieną:', err);
    } 
}

window.addEventListener('DOMContentLoaded', () => renderDetails());

// <h2 class="text-3xl font-bold text-blue-700">${post.title}</h2>