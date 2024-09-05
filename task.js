var prompt= require('prompt-sync')();
// task 1

/* Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk */

var burger=600;
if (burger>500){
    console.log("Congratulations! You have got a free coke!");
}
else{
    console.log("Sorry! You have no free offer! Please pay 30 tk. for coke.");
}

// task 2

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
var weight=parseInt(prompt('Enter weight : '));
var height= parseInt(prompt('Enter height : '));
var BMI = weight/ height**2;
console.log(BMI);
