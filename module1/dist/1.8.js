"use strict";
{
    // destructing
    const user = {
        id: 342,
        name: {
            firstName: "Abdul",
            middleName: "Kader",
            lastName: "Mulla"
        },
        contactNo: "01800000",
        address: "Uganda"
    };
    const { name: { firstName, middleName: midName, lastName }, id, address, contactNo } = user;
    console.log(`name is ${firstName + " " + midName + " " + lastName}
    address is : ${address} .
    contact No : ${contactNo}  `);
    // array destructing
    const friends = ["Rock", "Jock", "Moke", "Dock"];
    const [, , bestFriend, ...rest] = friends;
    // console.log(bestFriend, rest);  //Moke [ 'Dock' ]
}
