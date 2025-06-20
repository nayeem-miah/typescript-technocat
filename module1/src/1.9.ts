{
    // type alias
    // using object
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string
    };

    const student1: Student = {
        name: "Jon ben",
        age: 30,
        gender: "Male",
        contactNo: "018000000",
        address: "USA"
    };

    const student2: Student = {
        name: "Mir Hussian",
        age: 23,
        gender: "Male",
        contactNo: "018333432",
        address: "BD Dhaka"
    };


    const student3: Student = {
        name: "Nur Hussian",
        age: 27,
        gender: "Male",
        address: "BD Dhaka"
    };

    // using string
    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = "Md Nayeem";
    const isAdmin: IsAdmin = true;

    // using function 
    type Add = (num1: number, num2: number) => number;
    const add : Add = (num1, num2) => num1 + num2;




}