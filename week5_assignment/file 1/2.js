function calculateDistance() {
  // Prompt the user for coordinates
  let x1 = prompt("Enter x1:");
  let y1 = prompt("Enter y1:");
  let x2 = prompt("Enter x2:");
  let y2 = prompt("Enter y2:");

  // Convert inputs to numbers
  x1 = Number(x1);
  y1 = Number(y1);
  x2 = Number(x2);
  y2 = Number(y2);

  // Calculate distance using the formula
  let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

  // Display the result
  document.getElementById("result").textContent =
    "The distance between the two points is: " + distance.toFixed(2);
}
