# TypeScript Type Error Not Caught

This repository demonstrates a common issue in TypeScript where type errors are not caught at compile time due to type coercion.  The function `add` is declared to accept two numbers, but a string is passed as the second argument.  TypeScript does not flag this as an error, resulting in a runtime error instead.

The solution demonstrates how to use stricter type checking and improve the robustness of the code. 

## Bug
The `bug.ts` file contains the buggy code that leads to a runtime error because TypeScript doesn't detect the type mismatch between the function parameters and the arguments passed.

## Solution
The `bugSolution.ts` file demonstrates how to fix the error by using a union type and explicitly checking the type of the arguments.  This stricter type checking prevents runtime errors. 