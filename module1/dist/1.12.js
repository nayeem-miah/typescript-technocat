"use strict";
{
    // nullable types
    const searchName = (value) => {
        if (value) {
            console.log("Searching.........");
        }
        else {
            console.log("there is nothing to search!!!");
        }
    };
    searchName(null);
    // unknown types 
    const getSpreedIMatterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpreed = value * 1000 / 3600;
            console.log(`The spreed is ${convertedSpreed} ms^-1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpreed = parseFloat(result) * 1000 / 3600;
            console.log(`The spreed is ${convertedSpreed} ms^-1`);
        }
        else {
            console.log("wrong input 😒");
        }
        ;
    };
    getSpreedIMatterPerSecond(`1000 ms^-1`);
    getSpreedIMatterPerSecond(null);
    // never types
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("muskil hoye gesa");
    // 
}
