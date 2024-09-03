// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
const valid6 = [6, 0, 1, 1, 7, 7, 6, 3, 6, 6, 6, 4, 2, 8, 0, 3, 4, 3, 9];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

function validateCred(arr) {
  // Array containing modified numbers from original array.
  const modifiedNumbers = [];

  
  // Loop to iterate through every number in the given array except the check digit.
  for (let i = arr.length - 2; i >= 0; i--) {

    // Checks if the card is a 15 digit number or a 16 digit number. 
    if (arr.length % 2 === 0) {
      // Conditional statement to check if the current index is even. If true, multiplies during push to doubled numbers array. If false, pushes without multiplication.
      if (i % 2 === 0) {
        modifiedNumbers.unshift(arr[i] * 2);
      } else {
        modifiedNumbers.unshift(arr[i]);
      }
    } else {
      // Conditional statement to check if the current index is even. If true, pushes without multiplication. If false, multiplies during push to doubled numbers array.
      if (i % 2 === 0) {
        modifiedNumbers.unshift(arr[i]);
      } else {
        modifiedNumbers.unshift(arr[i] * 2);
      }
    }
  }

  

  // Adding the last element of the original element to the modified numbers array.
  modifiedNumbers.push(arr[arr.length - 1]);

  // Iterating through the doubled numbers array and substracting 9 from any figure that is greater than 9.
  for (let i = 0; i < modifiedNumbers.length; i++) {
    if (modifiedNumbers[i] > 9) {
      modifiedNumbers[i] -= 9;
    }
  }

  // Creation of the sum variable and assiging the result of adding together all the numbers in the array containing the doubled and subtracted figures.
  const sum = modifiedNumbers.reduce((acc, currentVal) => acc + currentVal);

  if (sum % 10 === 0) {
    return "Valid";
  } else {
    return "Invalid";
  }
}



let invalidCards = [];
function findInvalidCard(cardBatch) {
  // Iterating through the supplied batch of cards to find every invalid card and add it to the invalidCards array.
  invalidCards = cardBatch.filter((card) => validateCred(card) === "Invalid");

  return invalidCards.forEach((card) => console.log(card));
}


function idInvalidCardCompanies(arr) {
  // Array containing the name companies sending invalid cards.
  const invalidCardCompanies = [];

  // Iterating through each element in the provided array.
  for (let i = 0; i < arr.length; i++) {

    // Checking first value of each card and pushing company name to invalidCardCompany array if not already included.
    if (arr[i][0] === 4) {
      if (!invalidCardCompanies.includes("Visa")) {
        invalidCardCompanies.push("Visa");
      }
    } else if (arr[i][0] === 3) {
      if (!invalidCardCompanies.includes("Amex (American Express")) {
        invalidCardCompanies.push("Amex (American Express");
      }
    } else if (arr[i][0] === 5) {
      if (!invalidCardCompanies.includes("Mastercard")) {
        invalidCardCompanies.push("Mastercard");
      }
    } else if (arr[i][0] === 6) {
      if (!invalidCardCompanies.includes("Discover")) {
        invalidCardCompanies.push("Discover");
      }
    } else {
      console.log("Company not found");
    }
  }

  return invalidCardCompanies;
}

console.log(validateCred(valid6))
//console.log(validateCred(invalid3))