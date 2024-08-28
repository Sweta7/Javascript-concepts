const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit) => {
    console.log(fruit);
});

fruits.map((fruit) => {
    console.log(fruit);
});

console.log(fruits.forEach((fruit) => {
    fruit.toUpperCase()
}));

console.log(fruits.map((fruit) => {
    fruit.toUpperCase()
}));

console.log(fruits.forEach(fruit => fruit.toUpperCase()));

//map returns new array without modifying original array
console.log(fruits.map(fruit => fruit.toUpperCase()));

//map returns new array without modifying original array
const data = fruits.map(fruit =>  fruit.toUpperCase());
//const data = fruits.map((fruit) => {return fruit.toUpperCase()});
console.log(data);
console.log(fruits);