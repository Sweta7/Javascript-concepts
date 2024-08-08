/** 
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to
  the top of their scope before code execution. This means that no matter where variables 
  and functions are declared, they are moved to the top of their scope regardless of whether 
  their scope is global or local.
- Only variables and declarative functions are hoisted, not function expressions or class functions are hoisted to the top of their scope.
- variables with var declaration are partially hoisted, meaning they are hoisted but not initialized.
- function declarations are fully hoisted, meaning they are hoisted and initialized.
- function expressions and class functions are not hoisted, meaning they are not moved to the top of their scope.
*/

console.log(a); //undefined
var a = 10;
hello(); // hello and 10

function hello() {
  console.log('hello'); //hello
  console.log(a); //10
}

outerFunction(); //will have same output

function outerFunction() {
  console.log(outerVariable); //undefined
  var outerVariable = 'outer';
  console.log('outerVariable'); //outer

  function innerFunction() {
    console.log(innerVariable); //undefined
    var innerVariable = 'inner';
    console.log('innerVariable'); //inner
  }
  return innerFunction();
}

outerFunction();

