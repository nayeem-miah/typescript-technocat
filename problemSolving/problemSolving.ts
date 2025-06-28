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
// console.log(inputValue2);


//  problem 1 done-------------------------


// problem 2 -----------------------
// Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.

type Items = {
    title: string;
    rating: number
}
function filterByRating(items: Items[]): Items[] {
    return items.filter((item) => item.rating >= 4);
};
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

const filterRating = filterByRating(books);
// console.log(filterRating);
// problem 2 done-------------------------


// problem 3 -----------------------------
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
function concatenateArrays<T>(...arrays: T[][]): T[] {
    // const concatArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
    // return concatArray;

    let newArray: T[] = [];
    for (let array of arrays) {
        newArray.push(...array);
    };
    return(newArray);
};

const result = concatenateArrays([1, 2], [3, 4], [5]);
console.log(result); // [1, 2, 3, 4, 5]
// problem 3 -----------------------------
