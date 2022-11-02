/* TODO:
Частина 1:
	@@ -16,4 +13,34 @@ https://pbs.twimg.com/media/EIopEQ6XYAEqzUk.jpg
Якщо обрати іншу картку, то з попередньої картки підсвітка знімається.
Тобто одночасно може бути обрана тільки одна картка.
*/

const root = document.querySelector('#root');

const cardArray = userData.map(user => createUserCard(user));

function createUserCard(user){

    const wrapper = document.createElement('div');
    wrapper.classList.add('card-wrapper');

    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('avatar');

    const h2 = document.createElement('h2');
    h2.append(user.name);

    const p = document.createElement('p');
    p.classList.add('desc');
    p.append(user.description);

    const button = document.createElement('button');
    button.append('Connent');

    wrapper.append(img, h2, p, button);
    return wrapper;
}

root.append(...cardArray);