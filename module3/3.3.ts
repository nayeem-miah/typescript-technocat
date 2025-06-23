{
    // type guard
    // typeof -----> type guard
    type AlphaNumeric = string | number;
    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if (typeof param1 == "number" && typeof param2 === "number") {
            return param1 + param2
        }else {
            return param1.toString() + param2.toString();
        }
    };

    const sumOfNumbers = add(23, "hello number");
    console.log(sumOfNumbers);


    // in guard --> using object
    type NormalUser = {
        name: string;
    };
    type AdminUser = {
        name: string;
        role: "admin"
    };

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`name is ${user.name}, role is ${user.role}`);
        } else {
            console.log(`name is ${user.name} role is normal user`);
        };
    };
    const normalUser: NormalUser = {
        name: "MD x",
    };
    const adminUser: AdminUser = {
        name: "Mr z",
        role: "admin"
    };
    getUser(normalUser);
    getUser(adminUser)
  

    //  if ("role" in user){} // in guard
}