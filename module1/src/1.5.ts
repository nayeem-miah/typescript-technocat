{
    //  reference types --> object

const user: {
    company: "programming Hero"; //type ---> literal type
    firstName: string;
    middleName?: string;// ? optional type
    lastName: string;
    isMired: boolean;
} = {
    company : "programming Hero",
    firstName: "Jhankar",
    lastName: "Mahabub",
    isMired: false
};

//  recap
const person: {
    name: string;
    age?: number;
    company: "Bangladesh It"
} = {
    name: "Abdul Hamid",
    age: 23,
    company: "Bangladesh It"
};


person.age = 43;
console.log(person);
}