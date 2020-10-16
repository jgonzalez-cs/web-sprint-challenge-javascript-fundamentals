// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:

// nestedFunction is able to access the private variable internal because nestedFunction shares the scope with myFunction because it is nested. If nestedFunction had been outside of myFunction, it would not be able to access internal because it is a private variable limited to myFunction's scope.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
    let counter = 0;
    for(i = 1; i < num + 1; i++) {
        counter = counter + i
    }
    return counter
}
console.log(summation(4)) // returns 10
console.log(summation(25)) // returns 325