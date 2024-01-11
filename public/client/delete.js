console.log('Hi deleteForm');

const container = document.querySelector('.cards');

container.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.classList.value.includes('danger')) {
      const { id } = e.target;
      const response = await fetch(`/profile/${id}`, {
        method: 'DELETE'
      });
      if (response.status === 200) {
        const card = e.target.closest('.card');
        container.removeChild(card);
      }
    }
  }
});
