const root = document.querySelector('#root');
const toggler = document.querySelector('.toggler');
/*
Створити квадрат 100 на 100пкс і відобразити його на сторінці
(він має бути дитиною div#root)
*/


const lamp = document.createElement('div');

lamp.id = 'testID' // добавление эелементу ID

lamp.classList.add('lamp','lamp-off'); // добавление эелементу class
root.append(lamp);


toggler.addEventListener('click', toggle);

function toggle() {
    lamp.classList.toggle('lamp-off');
    lamp.classList.toggle('lamp-on');

    console.log(lamp.classList);
}