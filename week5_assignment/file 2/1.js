// Create an array called fruits and initialize it
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Display the contents of the fruits array
console.log("Fruits:", fruits);

// Calculate and display the length of the fruits array
console.log("Length of Fruits:", fruits.length);

// Access and display the element at index 2
console.log("Element at Index 2:", fruits[2]);

// Access and display the last element using the length property
console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

// Create an empty array for vegetables
let vegetables = [];

// Prompt the user to enter three vegetables
let veg1 = prompt("Enter the first vegetable:");
let veg2 = prompt("Enter the second vegetable:");
let veg3 = prompt("Enter the third vegetable:");

// Add each entered vegetable to the array using push()
vegetables.push(veg1);
vegetables.push(veg2);
vegetables.push(veg3);

// Display the contents of the vegetables array
console.log("Vegetables:", vegetables);

// Calculate and display the length of the vegetables array
console.log("Length of Vegetables:", vegetables.length);
