# Undefined vs Null
## Q.1) What is "undefined" in JavaScript ?
 - When a variable is defined without a value js assign that variable data type as undefined.
## Q.2) What will be the output of undefined==null & undefined===null ? Why ?
 - undefined and null both represent the no value so in case of == it will be the true, but in case of === it will be the false because === check value and the data type and both are different primitive data type. If we check the datatype of typeof null we will get 'object' but it's a primitive data type.
## Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)
 - As we know undefined is a data type, so a data type can be assigned to variable is YES. as let i = undefined
 - console.log(i) // undefined

# Function Scope and Block Scope
## Q.1) What is hoisting in javascript ?
 - Hosting in javascript is a process where internally it can access variable and function declaration before it defined because of memory creating phase. or it is bringing the declaration on top.
## Q.2) How does block scope work ?
 - Block scope in general is a {} area where it creates own space or separate scope for variables, functions etc. Ex. if condition, loop.
## Q.3) What is the scope of a variable ?
 - Scope is the availability or visibility or accessibility of a variable

# Semicolon in js
## Q.1) Should you terminate all lines by a “;” ?
## Q.2) Why this code is returning undefined in spite of function returning a valid object literal ?
```js
    function test(){
        return {
            a:5
        }
    }
    const obj=test();
    console.log(obj);
```
## Q.3) Can ‘use strict’ statement or the strict mode change the behavior of ASI ?

