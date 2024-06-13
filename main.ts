//             🚀 Day 36 Challenge: Start Coding! 🚀

// Question 106: 
// Determine if a given year is a leap year using comparison operators.

function isLeapYearOrNot(year:number): boolean {

return (year % 4 == 0 && year % 100!= 0) || year % 400 == 0;  // checks if the year is a leap year or not
      
}

console.log(isLeapYearOrNot(2020)); // Outputs: true
console.log(isLeapYearOrNot(2021)); // Outputs: false


// Question 107: 
// Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

function isDivisibleByTwoAndThree(number: number): boolean {
    return number % 2 == 0 && number % 3 == 0;
}

console.log(isDivisibleByTwoAndThree(12));   // Outputs: true
console.log(isDivisibleByTwoAndThree(16));   // Outputs: false


// Question 108:
// Compare two strings to check if they are identical, ignoring case sensitivity.

function compareStrings(string1: string, string2: string): boolean {
    return string1.toLowerCase() == string2.toLowerCase();
}

console.log(compareStrings("hello", "Hello")); // output is true
