{
    // utility types
    // pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    };

    type nameAge = Pick<Person, "name" | "age">;

    // omit type
    type ContactInfo = Omit<Person, "name" | "age">;
    
    // Required type
    type RequiredTpe = Required<Person>;

    // partial type ------optional
    type PersonPartial = Partial<Person>;
    
    // readonly type
    type PersonReadonly = Readonly<Person>;

    const person1: PersonReadonly = {
        name: "MR T",
        age: 12,
        email: "t@gmail.com",
        contactNo: "029"
    };

    // person1.age = 32;  // error


    // Record type
    // type MyObj = {
    //     a: string;
    //     b: string;
    // };

    type MyObj = Record<string,string>

    const myObj: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd"
    };

    // empty object
    const emptyObj: Record<string, unknown> = {};
    



    // 
}