function calculateGrade() {
  // Prompt user for their score
  let score = prompt("Enter your course score (0 - 100):");

  // Convert input to a number
  score = Number(score);

  let grade;

  // Determine grade based on the score range
  if (score >= 0 && score <= 39) {
    grade = 0;
  } else if (score >= 40 && score <= 51) {
    grade = 1;
  } else if (score >= 52 && score <= 63) {
    grade = 2;
  } else if (score >= 64 && score <= 75) {
    grade = 3;
  } else if (score >= 76 && score <= 87) {
    grade = 4;
  } else if (score >= 88 && score <= 100) {
    grade = 5;
  } else {
    grade = "Invalid score! Please enter a value between 0 and 100.";
  }

  // Display result on the HTML page
  document.getElementById("result").textContent = "Your grade is: " + grade;
}
