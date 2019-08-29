# **Async delay function**

### Use async / await to delay calling a function until a specified time.

## **Installation**
> `npm install async-delay-function --save`    

or  

> `yarn add async-delay-function`  

---
## **Syntax**

> **`asyncDelay(func, delay, ...args);`**

### **Parameters**
  - `func`:   
  The function to be executed
  - `delay`:   
  The number of milliseconds passed the `setTimeout` call.
  - `args`:   
  An array of arguments passed to the `func`.


### **Return value**  
  - `asyncDelay` will return the result of the supplied function `func(...args)`, if any. 
---
## **Usage**
### To delay the execution of a function and await the result, pass the function, delay and optional arguments: 


```
import { asyncDelay } from "async-delay-function";
```

```  
const myFunction = (greeting, name) => {
	return `${greeting}, from ${name}!`;
};

const myGreeting = "Hello";
const myName = "Me";

const myDelayedFunctionCaller = async () => {
	const myDelayedResult = await asyncDelay(myFunction, 2000, myGreeting, myName);
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