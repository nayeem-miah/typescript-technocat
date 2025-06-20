"use strict";
var _a;
{
    // ternary operator || optional chaining || nullish coalescing
    const age = 32;
    if (age >= 18) {
        // console.log("adult");
    }
    else {
        // console.log("not adult");
    }
    ;
    // ternary operator
    const isAdult = age >= 18 ? "this age is Adult " : "this age is not adult ";
    // console.log(isAdult);
    //  nullish coalescing
    // null --> undefined ---> decision making
    const isAuthenticated = "";
    // const isAuthenticated = null;
    // const isAuthenticated = undefined;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest"; // null or undefined 
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    const user = {
        name: "MD Nayeem Miah",
        address: {
            city: "Mymensingh",
            road: "new Marker -12",
            presentAddress: "Gnaginarpar"
        }
    };
    // nullish coalescing
    const permanentAddress = (_a = user.address.permanentAddress) !== null && _a !== void 0 ? _a : "No permanent Address";
    console.log({ permanentAddress });
    // 
}
// npm i ts-node-dev --save-dev
// ts-node-dev --respawn --transpile-only server.ts
