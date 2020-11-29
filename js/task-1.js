
const listRef = document.getElementById('categories');
const itemsRef = document.querySelectorAll('.item')


console.log(`В списке <ul id="categories">  ${itemsRef.length} категории.`);

const getItemInfo = [...itemsRef].forEach(item =>
    console.log(
`Категория ${item.children[0].textContent},
количество єлементов в ней ${item.children[1].childElementCount}`)
)





