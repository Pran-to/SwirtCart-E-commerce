Qus : What is the difference between null and undefined?
Ans : undefined means a variable has been declared, but it has not been assigned a value yet.
and null is use for that a variable should be empty or has no value. it is a deliberate reset.

Qus :  What is the use of the map() function in JavaScript? How is it different from forEach()?
Ans : map(): Returns a new array. Use it when you need to transform data  and need to return something.
and  forEach(): Returns undefined. Use it when you need  to "do something"  without creating a new list or returning something.

Qus : What is the difference between == and ===?
Ans :( == ) It performs Type Coercion, meaning it tries to convert the values to the same type before comparing.
and (===)  It compares both the value and the type. No conversion happens. 

Qus : What is the significance of async/await in fetching API data?
Ans : async/await makes asynchronous code (like fetching data from a server) look and behave like synchronous code.

Qus : Explain the concept of Scope in JavaScript (Global, Function, Block).
Ans : Scope determines where your variables are "visible" or accessible.
Global Scope: Variables declared outside any function. Accessible from anywhere in your code.
Function Scope: Variables declared inside a function. They can only be used inside that specific function.
Block Scope: Variables declared with let or const inside curly braces {} (like an if statement or a for loop). They "die" once the code leaves that block.
