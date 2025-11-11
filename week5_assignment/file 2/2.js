// Create an empty array called numbers
let numbers = [];

// Prompt the user to enter five numbers and add them to the array
for (let i = 1; i <= 5; i++) {
  let num = prompt("Enter Number " + i + ":");
  numbers.push(Number(num)); // Convert input to a number and push to array
}

// Display the contents of the numbers array
console.log("Numbers:", numbers);

// Prompt the user to enter a number to search for
let searchNum = prompt("Enter a Number to Search:");

// Check if the entered number is in the array using includes()
if (numbers.includes(Number(searchNum))) {
  console.log("Number " + searchNum + " is found in the array.");
} else {
  console.log("Number " + searchNum + " is NOT found in the array.");
}

// Remove the last number using pop()
numbers.pop();

// Display the updated array
console.log("Updated Numbers:", numbers);

// Sort the numbers in ascending numerical order
numbers.sort(function(a, b) {
  return a - b; // Ensures numerical sorting, not string sorting
});

// Display the sorted numbers
console.log("Sorted Numbers:", numbers);
