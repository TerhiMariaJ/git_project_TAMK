//Waits 1sec, returns promise-object with hello
async function delayedHello(hello) {
  this.hello = hello;
  await setTimeout(() => console.log(hello), 1000);
}
//Prints out "Hello World", 5 times with a loop
function loopHello(hello) {
  for (let i = 0; i < 5; i++) {
    console.log(hello);
  }
}

//Takes a & b as arguments, divides a / b and returns promise with quotient
function makeCalculation(a, b) {
  function asyncFunc(resolve, reject) {
    if (b === 0) {
      reject("Cannot divide with zero");
    } else {
      setTimeout(() => {
        console.log("Calculating...");
        const division = a / b;
        resolve(division);
      }, 1000);
    }
  }
  const p = new Promise(asyncFunc);
  return p;
}

let hello = "Hello World";
loopHello(hello);
delayedHello(hello);

//1. Make async function that sends numbers to makeCalculations()
//2. Wait for the number from makeCalculations.
//3. Send it to loopHello() for loops.
//4. ???
//5. Profit
