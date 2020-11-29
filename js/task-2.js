const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.getElementById('ingredients');
const fragmentRef = document.createDocumentFragment();

const itemsRef = ingredients.forEach(item => {
    const itemRef = document.createElement('li');
    itemRef.textContent = item;
    fragmentRef.append(itemRef);
    
});
listRef.append(fragmentRef);






