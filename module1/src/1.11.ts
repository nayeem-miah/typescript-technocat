{
    // ternary operator || optional chaining || nullish coalescing
    const age: number = 32;

    if (age >= 18) {
        // console.log("adult");
    } else {
        // console.log("not adult");
    };
 
    // ternary operator
    const isAdult = age >= 18 ? "this age is Adult " : "this age is not adult ";
    // console.log(isAdult);
    

    //  nullish coalescing
    // null --> undefined ---> decision making
    const isAuthenticated = ""
    // const isAuthenticated = null;
    // const isAuthenticated = undefined;
    const result1 = isAuthenticated ?? "Guest";  // null or undefined 
    const result2 = isAuthenticated ? isAuthenticated : "Guest"
    // console.log({result1: result1}, {result2: result2});

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    };
    const user: User = {
        name: "MD Nayeem Miah",
        address: {
            city: "Mymensingh",
            road: "new Marker -12",
            presentAddress: "Gnaginarpar"
        }
    };
    // nullish coalescing
    const permanentAddress = user.address.permanentAddress ?? "No permanent Address"
    console.log({permanentAddress});


    // 
}


// npm i ts-node-dev --save-dev
// ts-node-dev --respawn --transpile-only server.ts
