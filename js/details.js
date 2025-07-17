import { newsTitle } from '../components/newsTitle.js'
import { DetailContent } from '../components/detailContent.js';

const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {
    try {
        const res = await axios.get('http://195.14.173.10:3000/naujienos/' + id);
        const post = res.data;

        const template = `
            <div class="bg-white rounded shadow p-6 border max-w-3xl mx-auto mt-10">
                ${newsTitle({ title: post.title })}
                ${DetailContent({ content: post.content })}
                <div class="mt-8 flex justify-between items-center">
                    <a href="index.html" class="text-blue-500 hover:underline">← Grįžti atgal</a>

                    <div class="space-x-2">
                        <a href="edit.html?id=${post.id}" 
                            class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow">
                            Redaguoti naujieną
                        </a>

                        <button 
                            id="deleteBtn"
                            class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded shadow">
                            Ištrinti naujieną
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = template;

        // Pridedam delete funkcionalumą
        const deleteBtn = document.getElementById('deleteBtn');
        deleteBtn.addEventListener('click', async () => {
            if (confirm('Ar tikrai norite ištrinti šią naujieną?')) {
                try {
                    await axios.delete('http://195.14.173.10:3000/naujienos/' + id);
                    window.location.href = 'index.html';
                } catch (err) {
                    alert('Nepavyko ištrinti naujienos.');
                    console.error('Klaida trynimo metu:', err);
                }
            }
        });

    } catch (err) {
        container.innerHTML = `<p class="text-red-500 text-center mt-10">Naujiena nerasta.</p>`;
        console.error('Klaida įkeliant naujieną:', err);
    } 
}

window.addEventListener('DOMContentLoaded', () => renderDetails());

// <h2 class="text-3xl font-bold text-blue-700">${post.title}</h2>
//<p class="text-gray-800 mt-4 text-lg">${post.content}</p>