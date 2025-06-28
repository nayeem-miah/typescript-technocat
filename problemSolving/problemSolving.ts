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
    return (newArray);
};

const result = concatenateArrays([1, 2], [3, 4], [5]);
// console.log(result); // [1, 2, 3, 4, 5]
// problem 3 -----------------------------


// ----------problem 4 -------------
// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method

class Vehicle {
    // private make: string;
    // year: number;

    constructor(private make: string, public year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`make : ${this.make} year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`model : ${this.model}`);
    }
};


const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"

//  problem 4 done ---------------------------------

// problem 5 ------------------------------
// Description: Write a function that takes a string | number and returns:

// The length if it's a string
// The number multiplied by 2 if it's a number

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length
    } else {
        return value * 2;
    }
};

const result2 = processValue("hello  form  js");
const result3 = processValue(4);
// console.log("result is", result3); 
// problem 5 done ------------------------------



//  Problem 6: ---------------------------------
// Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

interface Product {
    name: string;
    price: number;
};
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

// function getMostExpensiveProduct(products: Product[]): Product | null {
//     if (products.length === 0) {
//         return null
//     }
//     if (products) {

//         const heightPriceProduct = products.reduce((first, second) => first.price > second.price ? first : second);
//         return heightPriceProduct;
//     } else {
//         return null
//     }
// };


// different ways



function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null
    }
    let maxProductPrice = products[0]
    if (products) {
        for (let index = 0; index < products.length; index++) {
            if (products[index].price > maxProductPrice.price) {
                return products[index];
            }
        }
    }
    return maxProductPrice;
}
const heightPriceProduct1 = getMostExpensiveProduct(products); // max price product
const heightPriceProduct = getMostExpensiveProduct([]); // return null
// console.log(heightPriceProduct);

// problem 6 done -------------------------------------



// problem 7 -------------------------------------
// Description:
// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday || day === Day.Saturday) {
        return "Weekday or off day ❤️❤️"
    } else {
        return "Weekend 😑😑"
    }
};
console.log(getDayType(Day.Thursday));

// Define an enum Month for the months of the year
enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

function examMonth(month: Month): string {
    if (month === Month.December || month === Month.July) {
        return "this month exam month"
    }
    return "not exam month"
};
// console.log(examMonth(Month.December));

// problem 7 done -------------------

