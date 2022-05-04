/*console.log("Starting to make a coffee");
console.log("Grinding coffee beans");
console.log("Boiling water");
console.log("Mixing boiled water with crushed coffee beans");
console.log("Pouring coffee into the cup");
console.log("Pouring some milk into the cup");
console.log("Coffee is ready!");


let cups = input("Write how many cups of coffee you will need:\n")
let milk = 50;
let water = 200;
let beans = 15;
console.log(`For ${cups} cups of coffee you will need:
${cups * water} ml of water
${cups * milk} ml of milk
${cups * beans} g of coffee beans`);*/

/*let countWater = 200;
let countMilk = 100;
let countBeans = 15;
let countCups = 1;
let milk = 50;
let water = 200;
let beans = 15;


if (countCups === Math.floor((countWater + countMilk + countBeans)/(milk + water + beans))) {
    console.log("Yes, I can make that amount of coffee");
}

if (countCups < Math.floor((countWater + countMilk + countBeans)/(milk + water + beans))) {
    let total = Math.floor((countWater + countMilk + countBeans)/(milk + water + beans)) - countCups;
    console.log("Yes, I can make that amount of coffee (and even " + total + " more than that)");
}

if (countCups > Math.floor((countWater + countMilk + countBeans)/(milk + water + beans))) {
    let total = Math.floor((countWater + countMilk + countBeans)/(milk + water + beans));
    console.log("No, I can make only " + total +  " cups of coffee");
}*/

console.log("Write how many ml of water the coffee machine has:");
let amountWater = 400;
console.log("Write how many ml of milk the coffee machine has:");
let amountMilk = 100;
console.log("Write how many grams of coffee beans the coffee machine has:");
let amountCoffee = 30;
console.log("Write how many cups of coffee you will need:");
let amountCupsCoffee = 1;

let cupCoffee = [];
cupCoffee.push(Math.floor(amountWater / 200));
cupCoffee.push(Math.floor(amountMilk / 50));
cupCoffee.push(Math.floor(amountCoffee / 15));
const minCups = Math.min(...cupCoffee);

if (amountCupsCoffee === minCups || amountCupsCoffee === 0) {
    console.log("Yes, I can make that amount of coffee");
} else if (amountCupsCoffee < minCups) {
    console.log("Yes, I can make that amount of coffee "
        + `(and even ${minCups - amountCupsCoffee} more than that)`);
} else if (amountCupsCoffee > minCups) {
    console.log(`No, I can make only ${minCups} cups of coffee`);
}