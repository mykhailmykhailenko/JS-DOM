const btnCollection = document.querySelectorAll('button');
const img = document.querySelector('img')

for (const btn of btnCollection) {
    btn.addEventListener('click', clickHandler)
}

function clickHandler (event) {
   img.setAttribute ('src', event.target.dataset.src)
}