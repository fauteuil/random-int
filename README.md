# **Async function delay**

### Using async / await, delay a function call with arguments and return the result.

## **Installation**
> `npm install async-function-delay --save`    

or  

> `yarn add async-function-delay`  

---
## **Syntax**

> **`asyncFunctionDelay(func, delay, ...args);`**

### **Parameters**
  - `func`:   
  The function to be executed
  - `delay`:   
  The number of milliseconds passed the `setTimeout` call.
  - `args`:   
  An array of arguments passed to the `func`.


### **Return value**  
  - `asyncFunctionDelay` will return the result of the supplied function `func(...args)`, if any. 
---
## **Usage**
### To delay the execution of a function and await the result, pass the function, delay and optional arguments: 


```
import { asyncFunctionDelay } from "async-function-delay";
```

```  
const myFunction = (greeting, name) => {
	return `${greeting}, from ${name}!`;
};

const myGreeting = "Hello";
const myName = "Me";

const myDelayedFunctionCaller = async () => {
	const myDelayedResult = await asyncFunctionDelay(myFunction, 2000, myGreeting, myName);
	console.log(myDelayedResult);
} 
```
```
// Logs "Hello, from Me!" to the console after 2 seconds.
myDelayedFunctionCaller();
```
---
## **References**  
 - [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function "async funcrion")