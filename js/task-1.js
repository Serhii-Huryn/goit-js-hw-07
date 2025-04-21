const items = Array.from(document.querySelectorAll('.item'));
const length = items.length;
console.log(`Number of categories: ${length}`);

items.map(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${item.lastElementChild.querySelectorAll('li').length}`
  );
});
