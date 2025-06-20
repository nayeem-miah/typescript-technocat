"use strict";
{
    // learning function
    // 1. normal function
    // 2. arrow function
    function add(num1 = 0, num2 = 10) {
        return num1 + num2;
    }
    ;
    add(12, 34);
    //  arrow function
    const addArrow = (number1, number2) => number1 + number2;
    // object --> function -> method
    const poorUser = {
        name: "Abdul Ahad",
        balance: 0,
        addBalance(balance) {
            return `My account balance is : ${this.balance + balance}`;
        }
    };
    // array 
    const arr = [1, 3, 35, 56, 6];
    const newArray = arr.map((element) => element * element);
    console.log(newArray);
}
