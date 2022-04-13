import Navigo from 'navigo';

const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
const addBtns = document.querySelectorAll('.header__btn-add, .library__btn-add');
const backBtn = document.querySelector('.library__btn-add, .header__btn-back');


const router = new Navigo('/', {
  hash: true,
});

const closeAllPage = () => {
  library.classList.add('hidden');
  book.classList.add('hidden');
  add.classList.add('hidden');
}


router.on({
  '/': () => {
    closeAllPage();
    library.classList.remove('hidden');
  },
  'book': () => {
    closeAllPage();
    book.classList.remove('hidden');
  },
  'add': () => {
    closeAllPage();
    add.classList.remove('hidden');
  }
}).resolve();


addBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    router.navigate('add');
  })
});

// backBtn.forEach(btn => {
//   btn.addEventListener('click', () => {
//     router.navigate('back');
//   })
// });