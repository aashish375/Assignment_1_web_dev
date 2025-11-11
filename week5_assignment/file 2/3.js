// Define an empty array to store the numbers
let numbers = [];

// Prompt the user for numbers until they type 'done'
while (true) {
  let input = prompt("Enter a number (or 'done' to finish):");

  // If user types 'done', exit the loop
  if (input === "done") {
    break;
  }

  // Convert the input to a number and add it to the array
  numbers.push(Number(input));
}

// Array to hold even numbers
let evenNumbers = [];

// Use for...of loop to go through each number in the array
for (let num of numbers) {
  // Check if the number is even using the modulo operator %
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

// Display the even numbers on the HTML page
let output = document.getElementById("output");

if (evenNumbers.length > 0) {
  output.textContent = "Even Numbers: " + evenNumbers.join(", ");
} else {
  output.textContent = "Even Numbers: None";
}

// Display end message
let endMessage = document.createElement("p");
endMessage.textContent = "End of Program.";
document.body.appendChild(endMessage);
