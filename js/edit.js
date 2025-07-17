const id = new URLSearchParams(window.location.search).get('id');
const form = document.getElementById('editForm');

const loadPost = async () => {
  try {
    const res = await axios.get('http://195.14.173.10:3000/naujienos/' + id);
    const post = res.data;

    form.title.value = post.title;
    form.content.value = post.content;
  } catch (err) {
    alert('Nepavyko gauti duomenų.');
    console.error(err);
  }
};

const updatePost = async (e) => {
  e.preventDefault();

  const updatedPost = {
    title: form.title.value,
    content: form.content.value
  };

  try {
    await axios.put('http://195.14.173.10:3000/naujienos/' + id, updatedPost);
    window.location.href = 'index.html';
  } catch (err) {
    alert('Nepavyko išsaugoti pakeitimų.');
    console.error(err);
  }
};

window.addEventListener('DOMContentLoaded', loadPost);
form.addEventListener('submit', updatePost);