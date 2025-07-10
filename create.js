const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    const doc = {
        id: Math.random().toString(36).substring(2, 6),
        title: form.title.value,
        content: form.content.value
    };

    try {
        await axios.post('http://195.14.173.10:3000/naujienos', doc);
        window.location.replace('index.html');
    } catch (error) {
        console.error('Klaida siunčiant POST užklausą:', error);
    }
}

form.addEventListener('submit', createPost);