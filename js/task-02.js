const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listItems = ingredients.map (ingredient => {
  const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    return listItem;
  });
  
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...listItems);
