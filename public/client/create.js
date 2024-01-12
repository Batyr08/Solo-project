console.log('Hi create fetch');
const form = document.querySelector('.createForm')


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (
    !res.name ||
    !res.place ||
    !res.type ||
    !res.averagePrice ||
    !res.description ||
    !res.pictureLink ||
    !res.mapPoint
  ) {
    alert('Please fill all fields to add review to your profile');
  } else {
    try {
      const response = await fetch('/addreview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(res)
      });
      const result = await response.json();
      if (result.msg) {
        window.location.href = '/profile';
      }
    } catch (error) {
      console.log(error);
    }
  }
});
