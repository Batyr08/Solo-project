const container = document.querySelector('.main-cards');
const card1 = document.querySelector('.comment-section');

container.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    if (e.target.classList.value.includes('primary')) {
      const { id } = e.target;
      // console.log(e.target)
      const commentInput = document.querySelector('[name="comment"]');
      // console.log(commentInput)
      const comment = commentInput.value;
      console.log(comment)
      const response = await fetch(`/profile/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({comment})
      });
      const result = await response.json();

      if (result.msg) {
        const div = document.createElement('p');
        div.classList.add('comment-paragraph')
        div.innerText = comment;
        card1.appendChild(div)
      }
    }
  }
});


// const div = document.createElement('div');
// div.classList.add('card');
// div.style.width = '18rem';
// div.id = `todo-${result.id}`;
// div.innerHTML = `
// <div class="card-body">
// <h5 class="card-title">${result.title}</h5>
// <p class="card-text">${result.text}</p>
// <button id=${result.id} type="button" class="btn btn-danger">
//   Delete
// </button>
// <button type="button" class="btn btn-primary">
//   Edit
// </button>
// </div>`;