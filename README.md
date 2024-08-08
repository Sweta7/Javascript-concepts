# Hoisting in JavaScript

This file demonstrates the concept of hoisting in JavaScript, where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed.

## Examples

1. **Variable Hoisting**

   - Example input: `console.log(x); var x = 5;`
   - Expected output: `undefined`

2. **Function Hoisting**
   - Example input: `console.log(myFunction()); function myFunction() { return 'Hello, World!'; }`
   - Expected output: `'Hello, World!'`

The README.md file explains the purpose of `hoisting.js` and provides examples to illustrate variable and function hoisting. It also highlights the potential issues that can arise due to hoisting and suggests best practices to avoid them, such as declaring variables at the top of their scope and using `let` and `const` instead of `var`.
