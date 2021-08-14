const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`В списке ${items.length} категории`);
console.log('');

const titles = [];
items.forEach(el => {
    // console.log(`Категория : `, el.getElementsByTagName('h2')[0].textContent);
    console.log(`Категория : `, el.querySelector('h2').textContent);
    console.log(`Количество элементов : `, el.getElementsByTagName('li').length);
    console.log('');
});