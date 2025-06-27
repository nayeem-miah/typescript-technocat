// problem 1 --------------
// Description: Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.


function formateString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLocaleLowerCase();
    } else {
        return input.toUpperCase();
    }
};

const inputValue = formateString("Hello", false);
const inputValue1 = formateString("hello");
const inputValue2 = formateString("hello", true);
console.log(inputValue2);


//  problem 1 done-------------------------
