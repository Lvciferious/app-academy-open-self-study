/*

Write a function printFives(max) that prints out the multiples of 5 that are less than the max.

Try to solve this in two ways, one using an if statement, and one without.

*/

let printFives = max => {
    for (let i = 0; i < max; i+= 5) {
        console.log(i);

    }
}

// Example:

printFives(20) // prints out:
// 0
// 5
// 10
// 15
