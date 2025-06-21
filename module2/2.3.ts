{
    // generic types

    // type GenericArray = Array<number>;
    type GenericArray<T> = Array<T>;

    // const rollNumber: number[] = [23, 34, 45, 65];
    const rollNumber:GenericArray<number>= [23, 34, 45, 65];
    
    // const mentors: string[] = ["MR.X", "MR.Y", "MR.Z"];
    // const mentors: Array<string> = ["MR.X", "MR.Y", "MR.Z"];
    const mentors: GenericArray<string> = ["MR.X", "MR.Y", "MR.Z"];

    // const boolArray: boolean[] = [true, false, true, false];
    // const boolArray: Array<boolean> = [true, false, true, false];
    const boolArray: GenericArray<boolean> = [true, false, true, false];

    
    // using object
    type User = { name: string; age: number };
    const user:GenericArray<User> = [
        {
            name: "Nayeem",
            age: 23
        },
        {
            name: "Sayeem",
            age: 22
        },
    ];

    // generic tuple
    type GenericTuple<X, Y> = [X, Y];
    // const man: [string, string] = ["MR.R", "MS.Z"]
    const man: GenericTuple<string, string> = ["MR.R", "MS.Z"];

    // user with id 
    type User1 = { name: string, email: string };
    const userWithId : GenericTuple<string, User1>= ["232", { name: "paso", email: "paso@gmail.com" }];
}