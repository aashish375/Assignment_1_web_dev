function checkTriangle() {
  // Prompt user for the three sides
  let a = prompt("Enter the length of side a:");
  let b = prompt("Enter the length of side b:");
  let c = prompt("Enter the length of side c:");

  // Convert to numbers
  a = Number(a);
  b = Number(b);
  c = Number(c);

  // Determine the type of triangle
  let result = "";

  // All sides equal
  if (a === b && b === c) {
    result = "Equilateral Triangle";
  }
  // Two sides equal (but not all three)
  else if (a === b || b === c || a === c) {
    result = "Isosceles Triangle";
  }
  // No sides equal
  else if (a !== b && b !== c && a !== c) {
    result = "Scalene Triangle";
  }
  // If it's not a triangle (like invalid sides)
  else if (!(a + b > c && a + c > b && b + c > a)) {
    result = "Not a valid triangle!";
  }

  // Display the result
  document.getElementById("result").textContent = "Result: " + result;
}
