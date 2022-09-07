const itemsArray = [
  { name: 'apple', price: 20 },
  { name: 'apple', price: 40 },
  { name: 'apple', price: 60 },
  { name: 'apple', price: 110 },
  { name: 'apple', price: 500 },
];
console.log('real array: ', itemsArray);
// return new array after filtering
const filterWithPrice = itemsArray.filter((item) => {
  return item.price <= 100;
});
console.log('filter with price: ', filterWithPrice);
//return new array only item we want .
const mapping = itemsArray.map((item) => {
  return item.price;
});
console.log('mapping name only: ', mapping);

const random = 1 + Math.random();
const random2 = 1 + Math.random();
console.log(random);
console.log(random2);

const newElement = document.createElement('p');
const node = document.createTextNode('this is new element from js');
newElement.appendChild(node);
const body = document.querySelector('body');
body.appendChild(newElement);
// const element = document.querySelector('#p1');
// element.innerHTML = 'ashish tamangaa';
// document.querySelector('h2').remove();
