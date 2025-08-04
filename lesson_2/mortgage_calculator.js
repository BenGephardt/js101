const readline = require("readline-sync");

// Prompt function to display messages
let prompt = message => console.log(`=> ${message}`);

// Checks for numbers that must be strictly positive and greater than zero
let isInvalidNumber = (number, allowZero = false) => {
  let cleanedStr = String(number).replace(/[$,%]/g, ''); // Ensure input is a string for .replace()
  let num = Number(cleanedStr);

  if (cleanedStr.trimStart() === '' || Number.isNaN(num)) {
    return true; // Input is empty or not a number
  }

  if (allowZero) {
    return num < 0; // For APR, only negative numbers are invalid
  } else {
    return num <= 0; // For loan amount/duration, zero and negative are invalid
  }
};

// Function to get the loan amount
let getLoanAmount = () => {
  prompt("What is the loan amount?");
  let loan = readline.question();

  // Validate loan amount input
  while (isInvalidNumber(loan)) {
    prompt("Please enter a valid number for the loan amount.");
    loan = readline.question();
  }
  loan = Number(loan.replace(/[$,%]/g, ''));
  return loan;
};

// Function to get the annual percentage rate (APR)
let getInputApr = () => {
  prompt("What is the annual percentage rate? Please enter as a whole number (e.g., 5 for 5%).");
  let apr = readline.question();

  // Validate APR input
  while (isInvalidNumber(apr, true)) {
    prompt("Please enter the percentage as a whole number (e.g., 5 for 5%).");
    apr = readline.question();
  }
  apr = Number(apr.replace(/[$,%]/g, ''));
  return apr;
};

// Function to get the loan duration in months
let getLoanDuration = () => {
  prompt("What is the loan duration in months?");
  let duration = readline.question();

  // Validate loan duration input
  while (isInvalidNumber(duration)) {
    prompt("Please enter a valid number for the loan duration in months.");
    duration = readline.question();
  }
  duration = Number(duration.replace(/[$,%]/g, ''));
  return duration;
};

// Function to calculate the monthly payment
let calculatePayment = (loanAmount, inputApr, loanDuration) => {
  const APR = inputApr / 100;
  const MONTHLY_INTEREST_RATE = APR / 12;
  let payment;
  if (APR === 0) {
    payment = loanAmount / loanDuration;
  } else {
    payment = loanAmount * (MONTHLY_INTEREST_RATE /
      (1 - Math.pow((1 + MONTHLY_INTEREST_RATE), (-loanDuration))));
  }
  return payment;
};

// Function to display the loan summary
let displayLoan = (loanAmount, inputApr, loanDuration, payment) => {
  let formattedLoan = loanAmount.toLocaleString('en-US');
  let formattedPayment = payment.toLocaleString('en-US');
  prompt(`Loan Details:
    \n Loan Amount: $${formattedLoan}
    \n APR: ${inputApr}%
    \n Duration: ${loanDuration} months
    \n The monthly payment is: $${formattedPayment}
    \n`);
};

// Main program starts here
prompt("Welcome to Mortgage Calculator.");
prompt("Please answer the following questions:");

while (true) {
  // Get user inputs for loan amount, APR, and loan duration
  let loanAmount = getLoanAmount();
  let inputApr = getInputApr();
  let loanDuration = getLoanDuration();

  // Calculates the monthly payment
  let payment = calculatePayment(loanAmount, inputApr, loanDuration).toFixed(2);

  // Displays the result
  displayLoan(loanAmount, inputApr, loanDuration, payment);

  // Prompt to restart the program
  prompt("Would you like to calculate another mortgage? (yes or no)");

  let answer = readline.question().toLowerCase();

  // Validate the answer input
  while (answer !== 'yes' && answer !== 'no') {
    prompt("Please enter 'yes' or 'no'.");
    answer = readline.question().toLowerCase();
  }

  if (answer === 'no') {
    prompt("Thank you for using the Mortgage Calculator. Goodbye!");
    break;
  }
  console.clear();
  prompt("Let's calculate another mortgage...");
}