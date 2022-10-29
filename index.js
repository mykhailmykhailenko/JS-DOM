// const DB = [
//     './images/136acde59b8ec0fc271f534e3f5a6494.jpeg',
//     './images/1617079715_51-p-oboi-priroda-vecher-53.jpg',
//     './images/1622211351_27-oir_mobi-p-russkaya-priroda-priroda-krasivo-foto-28.jpg',
//     './images/1623706543_34-oir_mobi-p-krasivaya-priroda-mira-priroda-krasivo-fot-35.jpg',
//     './images/Живая-природа.jpg',
//     './images/Desert_Electric.jpg'
// ];

const userDataBase = [
    {
        firstName: 'John',
        lastName: ' Snow',
        avatar: './images/136acde59b8ec0fc271f534e3f5a6494.jpeg',
        email: 'test@mail.com'
    },
    {
        firstName: 'Alex',
        lastName: ' Doe',
        avatar: './images/1617079715_51-p-oboi-priroda-vecher-53.jpg',
        email: 'test@mail.com'
    },
    {
        firstName: 'Gram',
        lastName: ' How',
        avatar: './images/1622211351_27-oir_mobi-p-russkaya-priroda-priroda-krasivo-foto-28.jpg',
        email: 'test@mail.com'
    },
    {
        firstName: 'Nike',
        lastName: ' Bow',
        avatar: './images/1623706543_34-oir_mobi-p-krasivaya-priroda-mira-priroda-krasivo-fot-35.jpg',
        email: 'test@mail.com'
    },
    {
        firstName: 'Pond',
        lastName: ' Gow',
        avatar: './images/Живая-природа.jpg',
        email: 'test@mail.com'
    }
]


const img = document.querySelector('.img');
const fullName = document.querySelector('h1');
const emailAdress = document.querySelector('p')
const [first] = userDataBase;

const {avatar, firstName, lastName, email} = first;


const [prevBtn, nextBtn] = document.querySelectorAll('.btn');

const slider = new Slider(userDataBase);

function updateView(){
    img.setAttribute('src', slider.currentSlide.avatar);
    fullName.innerText = `${slider.currentSlide.firstName} ${slider.currentSlide.lastName}`;
    emailAdress.innerText = `${slider.currentSlide.email}`
}


const buttonHandler = (direction = 'next') => {
    return function(){
        slider.currentIndex = slider[direction];
        updateView();
    }
}

prevBtn.addEventListener('click', buttonHandler('prev'));

nextBtn.addEventListener('click', buttonHandler('next'));


updateView();


