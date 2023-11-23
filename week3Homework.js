// Parts 1 & 2 of Homework
const pizzaToppings = ["onion", "ham", "sausage", "pineapple", "pepperoni"];

function greetCustomer() {
  let message = "Welcome to Pizza House, our toppings are: ";
  for (let i = 0; i < pizzaToppings.length; i++) {
    if (i === pizzaToppings.length - 1) {
      message += `and ${pizzaToppings[i]}.`;
    } else {
      message += `${pizzaToppings[i]}, `;
    }
  }
  console.log(message);
}

// Part 3 of Homework - Essentially same function but slightly different format to test
function getPizzaOrder(size, crust, ...toppings) {
  const myToppings = [...toppings];
  let message = `One ${size} ${crust} pizza with `;
  for (const topping of myToppings) {
    if (topping === myToppings[myToppings.length - 1]) {
      message += "and " + topping;
    } else {
      message += topping + ", ";
    }
  }
  console.log(message);
  return [size, crust, ...toppings];
}

// Part 4
function preparePizza([size, crust, ...toppings]) {
  console.log("...Cooking pizza...");
  return {
    size: size,
    crust: crust,
    toppings: [...toppings]
  };
}

//Part 5
function servePizza(pizza) {
  let yourToppings = "";
  for (const topping of pizza.toppings) {
    if (topping === pizza.toppings[pizza.toppings.length - 1]) {
      yourToppings += `and ${topping}.`;
    } else {
      yourToppings += topping + ", ";
    }
  }
  console.log(
    `Order up! Here's your ${pizza.size} ${pizza.crust} pizza with ${yourToppings}. Enjoy!`
  );
  return pizza;
}

greetCustomer();
const order = getPizzaOrder("large", "thin crust", "onion", "ham", "pineapple");
const pizzaObj = preparePizza(order);
servePizza(pizzaObj);
