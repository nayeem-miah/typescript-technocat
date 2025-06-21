{
    // learning interface

    // using type
    type User1 = {
        name: string;
        age: number;
    }; 
     // using interface
     interface User2 {
        name: string;
        age: number;
    };
    type rollNumber = string;  // permeative data types
    // interface roll = number; // wrong way
    type UserWithRole1 = User1 & { role: string };
    // using interface
    interface UserWithRole2 extends User1 {
        role : string
    };

    const user1: UserWithRole1 = {
        name: "MD Nayeem",
        age: 21,
        role : "manager"
    };
    const user2: User2 = {
        name: "MD Nayeem",
        age: 21,
        
    };


    const userWithRole2: UserWithRole2 = {
        name: "AH Habib",
        age: 23,
        role : "Manger"
    };

   
    // interface with using an Array
    // js --> object ---> Array ---> Object --- function ---> object
    type Role1 = number[];

    interface Role2 {
        [index: number]: number;
    }

    const rollNumber1: Role1 = [32, 43, 45, 45];
    const rollNumber2: Role2 = [32, 43, 45, 45];
    
    // interface using function
    type Add = (num1: number, num2: number) => number;

    interface Add2 {
       (num1: number, num2 : number) : number
    };

    const add: Add = (num1, num2) => num1 + num2;
    add(3, 23);

    const Add2: Add2 = (num1, num2) => num1 + num2;
    add(3, 23);


    // 
}