// learning function
// 1. normal function
// 2. arrow function


function add(num1 : number = 0, num2: number= 10): number {
    return num1 + num2;
};

add(12, 34);

//  arrow function
const addArrow = (number1: number, number2: number): number => number1 + number2;


// object --> function -> method
const poorUser = {
    name: "Abdul Ahad",
    balance: 0,
    addBalance(balance: number): string {
        return `My account balance is : ${this.balance + balance}`
    }
};

// array 
const arr: number[] = [1, 3, 35, 56, 6];
const newArray: number[] = arr.map((element: number): number => element * element);
console.log(newArray);