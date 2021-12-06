import myCollection from "./collection.js";
import chalk from "chalk";

//   console.log(myCollection);

function describeItem(item) {
    if (item.count > 1) {
        console.log(`I have ${chalk.cyan(item.count)} ${chalk.yellow(item.name)}s. Here's what I like about them: ${chalk.green(item.whatILike)}`);
    } else {
        console.log(`I have ${chalk.cyan(item.count)} ${chalk.yellow(item.name)}. Here's what I like about them: ${chalk.green(item.whatILike)}`);
    }
}

// describeItem(myCollection[2]);


// Now make a function called `describeCollection` that takes in an array as a parameter. 
function describeCollection (array) {
    for (let i=0; i < array.length; i++) {
        describeItem(array[i]);
    }
}

describeCollection(myCollection);

// The function should loop through the array, and for each item, 
// it should call the `describeItem` function so it displays a message according to how many you have in your collection.

// Call your function below where you've defined it, handing in the `myCollection` array.

// Run the file again to see the output 
// and check that it outputs the correct message for each item in your collection (i.e. each object in your `myCollection` array).

// - Make the name of each item in your collection cyan
// - Make the count of each item in your collection yellow
// - Make what you like about each item in your collection green