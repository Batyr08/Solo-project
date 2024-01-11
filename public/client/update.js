console.log('Hi editForm');

const form = document.querySelector('.editForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  console.log(res);
  try {
    const response = await fetch(`/profile/${res.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    if (result.msg) {
      window.location.href = '/profile';
    }
  } catch (error) {
    console.error(error);
  }
});