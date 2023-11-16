const pizzaPlace = "Ben's Pizzeria";
const numberOfToppings = 10;

console.log(pizzaPlace);
console.log(typeof pizzaPlace);

console.log(numberOfToppings);
console.log(typeof numberOfToppings);

console.log(
  `${pizzaPlace} has the best pizza in Texas! They have at least ${numberOfToppings} available!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

// Bonus Challenge
for (let i = 0; i <= numberOfToppings; i++) {
  if (!(i % 2)) {
    console.log(i);
  }
}
