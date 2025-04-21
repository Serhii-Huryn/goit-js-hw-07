const items = document.querySelectorAll(".item");
const itemsNumber = items.length

console.log(`Number of categories: ${itemsNumber}`);

for (const item of items) {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
    
}