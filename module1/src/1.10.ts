{
    // union types
    // type FrontendDeveloper = "fakibuzzDeveloper" | "juniorDeveloper";
    // type FullStackDeveloper = "frontendDeveloper" | "fullStackDeveloper";
    // type Developer = FrontendDeveloper | FullStackDeveloper;

    // const newDeveloper: FrontendDeveloper = "fakibuzzDeveloper"
    

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: "male" | "female";
    //     bloodGroup: "A+" | "O+" | "AB+"
    // };

    // const user1: User = {
    //     name: "Ab. Nazmul",
    //     email: "dev.nayeem01@gmail.com",
    //     gender: "male",
    //     bloodGroup: "O+"
    // };
    // const user2: User = {
    //     name: "MA Parser",
    //     gender: "male",
    //     bloodGroup: "A+"
    // };


    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    };
    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    };

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;


    const fullStackDeveloper: FullStackDeveloper = {
        skills: ["HTML", "CSS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    };


}