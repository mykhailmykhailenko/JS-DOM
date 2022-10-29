const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

btn1.addEventListener('mouseover', changeText)
btn2.addEventListener('mouseover', changeText)

btn1.addEventListener('mouseleave', changeText)
btn2.addEventListener('mouseleave', changeText)

function changeText () {
        const tmp = btn1.innerText;
        btn1.innerText = btn2.innerText;
        btn2.innerText = tmp
}

