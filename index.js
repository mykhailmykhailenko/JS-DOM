const root = document.querySelector('#root');

/*
Створити квадрат 100 на 100пкс і відобразити його на сторінці
(він має бути дитиною div#root)
*/

const element = document.createElement('section')
element.style.width = '100px';
element.style.height = '100px';
element.style.backgroundColor = 'black';
element.style.border = '1px solid black';
root.append(element)

