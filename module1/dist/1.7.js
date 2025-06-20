"use strict";
{
    // spreed operator
    // rest operator
    // destructing
    // learning spreed operator
    // Array
    const friends1 = ["Maybe Rakib", "Ripon Miah", "Mridul"];
    const friends2 = ["Mehedi", "A Ahad", "Tonmoy"];
    friends1.push(...friends2);
    // console.log(friends1);  //[ 'Maybe Rakib', 'Ripon Miah', 'Mridul', 'Mehedi', 'A Ahad', 'Tonmoy' ]
    // object spreed operator
    const mentor1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan"
    };
    const mentor2 = {
        next: "Tanmoy",
        prisma: "Firoz"
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    console.log(mentorList);
    // Learn Rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Babul", "kabul");
}
;
