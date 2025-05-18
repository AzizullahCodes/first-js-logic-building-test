// Fisrst js-logic-building-test-17-02-205
// 1. Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.

        //  var enter_number = +prompt('Enter any number');
        //  var result = enter_number % 3;
        // if (result === 0){alert('Number is divisible by 3');}
        //  else{alert('No is not divisible by 3');}

        // 2. Write a program that checks whether the given input is an even 
// number or an odd number?
        //  var enter_number = +prompt('Enter number(1 to unlimited)');
        //  var result = enter_number % 2;
        //  if(result === 0){alert('The number you entered is an even number');}

        //  else {alert('The number you entered is an odd number');}
// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough", 
// otherwise output "Too young"


//  var age = prompt('Enter your age');
//  if (age > 18){alert('Old enough');}
//  else{alert('Too young');}

// 4. Write a program that prompts the user for their name, and then 
// displays a special greeting to that person if their name is the 
// same as yours. If the name entered by the user is anything 
// other than your name, your code should not produce any 
// output
// ans===
        //  var name = prompt('Enter your name');
        //  var my_Name = 'Aziz';
        //  if (name === my_Name) {alert('Welcome you entered valid name');}

        // 5. Write a program to check whether the given input number is 
// divisible by 3 or not by using Switch Case statements. Show a 
// message “Number is not divisible by 3” or “Number is divisible 
// by 3”. 
// ans=== 
        //  var enter_number = prompt('Enter any number');
        //  var result = enter_number % 3;
        //  if (result === 0){alert('Number is divisible by 3');}
        //  else {alert('Number is not divisible by 3');}

// 7. Write a program to create a calculator for +, -, *, /, % using 
// switch case statements. (number1, number2 and operator will 
// be input)
        // var number1 = +prompt('Enter number 1');
        // var number2 = +prompt('Enter number 2');
        // var operator = prompt('Enter one operator(+,-,*,/,%)');
        // if (operator === '+'){alert(number1 + number2);}
        // else if (operator === '-'){alert(number1 - number2);}
        // else if (operator === '*'){alert(number1 * number2);}
        // else if ( operator === '/'){alert(number1  / number2);}
        // else if (operator == '%'){alert(number1 % number2);}
        // else{alert('Invalid entery');}

//         8. Write a program that takes time as input from user in 24 hours 
// clock format like: 1900 = 7pm. Implement the following case 
// using if, else & else if statement and show message like 'good morning','good afternoon','good evening' and good night?
        //  var enter_time = +prompt('Enter time(like 1900 = 7pm)');
        //  if (enter_time >= 0000 && enter_time < 1200){alert('Good morning');}
        //  else if (enter_time >= 1200 && enter_time < 1700){alert('Good afternoon!');}
        //  else if (enter_time >= 1700 && enter_time < 2100){alert('Good evening');}
        //  else if (enter_time >= 2100 && enter_time <= 2359){alert('Good night');}
        //  else {alert('Invalid entry');}



// 9. Write a program that takes a calendar year in YYYY format in 
// a variable. Check & notify the user whether it is a leap year or 
// not 
// ans= 
        //  var enter_Year = prompt('Enter calendar year in format YYYY(2020,2024,etc..)');
        //  var result = enter_Year % 4;
        //  if (result === 0){alert('The year you entered is a leap year');}
        //  else{alert('The year you enter is not leap year');}

        // question 10. Write a program that 
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give 
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered 
// matches the original password”. Show “Incorrect 
// password” otherwise; 
//  ans 
//   var correct_Password = 2367;
//  var enter_Password = +prompt('Enter your password');
//  if (enter_Password === correct_Password){alert('you entered correct password');     
//  }
// //  else{if(enter_Password !== correct_Password){alert('plz enter your password');}}
// if(enter_Password !== correct_Password){alert('plz enter your password');}
// {if(enter_Password === correct_Password){alert('The password you entered matches the original password');}
// else{alert('Incorrect password');}}
// question no 11 
// 11. Write a program that adds an else statement to the following 
// script to display “You are not Fahad”
// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }
                // var name = prompt('Enter name');
                //  var firstName = 'Ali';
                //  if (name === 'Fahad'){alert('Hello Fahad!');}
                //  else{alert('You are not Fahad');}

        //  12. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }
        // var hour = prompt('Enter hour (1 to ...24)');
        // if (hour < 18){ alert('Good day');}
        // else{alert('Good evening');}



// 13. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.
        // var integer_1 = +prompt('Enter integer 1');
        // var integer_2 = +prompt('Enter integer 2');
        // if (integer_1 > integer_2){alert('integer 1 is larger');}
        // else if (integer_2 > integer_1){alert('Integer 2 is greater');}
        // else if (integer_1 === integer_2){alert('Two integers are equal');}

        // else {alert('Invalid entry');}


// 14. Write a program that takes input a number from user & state 
// whether the number is positive, negative or zero. 
//  ans== 
        //  var enter_number = +prompt('Enter a number');
        //  if (enter_number > 0){alert('The number is positive');}
        //  else if (enter_number < 0) {alert('The number is negative');}
        //  else if (enter_number === 0){alert('The number is zero');}
        //  else{alert('Invalid entry');}

// 15. Ask the user what the current hour is. If the hour is between 
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is 
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If 
// the hour is between 5 and 8 p.m., tell the user, "It's dinner 
// time." For any other hours, tell the user, "Sorry, you'll have to 
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock 
// format i.e. 14 for 2pm , 15 for 3pm) 

        // var ask_user = prompt('Enter current hour (like 2,5,8,12,... 24');

        // if (ask_user >= 6 && ask_user <= 9){alert('Breakfast is served');}
        // else if (ask_user >= 11 &&  ask_user <= 13 ){alert('Time for lunch');}
        // else if (ask_user >= 17 && ask_user <= 20){alert("It's dinner time");}
        // else {alert("sorry ,you'll have to wait, or go get a snack.")}

// 
