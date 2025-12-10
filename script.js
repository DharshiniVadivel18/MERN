// //let a ;
// var b ;
// b=10;
// const c = 20;

// arr = [1, 2, 3];
// console.log(arr);

// var obj = { // Object declaration
//     name: "John",
//     age: 30
// };
// console.log(obj);

// // arithmetic operations
// var a=10;
// var b="10";
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);       
// console.log(a%b);

// //Relational Operators
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);

// //Assignment Operators
// var x=5;
// x+=2;       
// console.log(x);
// x-=2;       
// console.log(x);
// x*=2;           
// console.log(x);
// x/=2;           
// console.log(x);
// x%=2;           
// console.log(x); 
// //logical operators
// var p=true;
// var q=false;        
// console.log(p && q);
// console.log(p || q);
// console.log(!p);
// console.log(!q);

// //looping statements
// for(var i=0;i<5;i++){
//     console.log("For Loop iteration: "+i);
// }       

// //while loop
// var j=0;
// while(j===5){
//     j++;
// }   
// console.log(j);

// //do-while loop
// var k=0;        
// do{
//     k++;
// }while(k===5);
// console.log(k);

// //conditional statements
// //if statement
// a=5;
// if(a%2===0){    
//     console.log(a+" is even");
// }

// //if-else statement
// if(a%2===0){    
//     console.log(a+" is even");
// }else{
//     console.log(a+" is odd");
// }

// //if-else if-else statement
// if(a<0){
//     console.log(a+" is negative");      
// }else if(a===0){
//     console.log(a+" is zero");
// }   
// else{
//     console.log(a+" is positive");
// }

// //switch statement
// var day=3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// // ternary operator
// var age=18;
// var eligibility = (age>=18) ? "Eligible to vote" : "Not eligible to vote";
// console.log(eligibility);

// //else if ladder using ternary operator
// var marks=80;
// var grade = (marks>=90) ? "A" : 
//             (marks>=80) ? "B" :
//             (marks>=70) ? "C" :
//             (marks>=60) ? "D" : "F";
// console.log("Grade: "+grade);

// //function declaration
// function add(x, y){
//     return x + y;
// }

// //Arrow function
// const add1 = (x, y) => x + y;
// console.log("Sum using function: "+add(5, 10));
// console.log("Sum using arrow function: "+add1(15, 25)); 

// //object method
// var person = {
//     firstName: "Jane",
//     lastName: "Doe",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };

// const {name,age,marks} ={
//     name:"Alice",
//     age:25,
//     marks:90
// }
// //palindrome check without using function
// var str="madam";
// var reversedStr=""; 
// for(var i=str.length-1;i>=0;i--){
//     reversedStr+=str[i];
// }       
// if(str===reversedStr){
//     console.log(str+" is a palindrome");
// }else{
//     console.log(str+" is not a palindrome");
// }   

//callback function
var greet=() => { 
    console.log("Hello World " );
   
}
 var main = (callback) => {     
    console.log("Inside main function");
    callback();
}
main(greet);
