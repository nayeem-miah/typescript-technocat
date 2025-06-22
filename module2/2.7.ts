{
    // generic constraint with key keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    };

    type Owner = "bike" | "car" | "shp"; // manually

    type Owner1 = keyof Vehicle;

    // const person1 : Owner1 ="bike"

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    };

    const user = {
        name: "MR Rah",
        email: "mr@gmail.com",
        address: "Dhk"
    };
    const car = {
        model: "TOya",
        year: 2023
    };
    const result1 = getPropertyValue(user, "name");
    const carResult = getPropertyValue(car, "model")




    // const user = {
    //     name: "MR Rah",
    //     email: "mr@gmail.com"
    // };
    // user.email = "mx@gmail.com";
    // console.log(user, user["email"]);  // {name: "" , email: "mr@gmail.com"} mx@gmail.com
    


    // 
}