{

    // spreed operator
    // rest operator
    // destructing

    // learning spreed operator

    // Array
    const friends1: string[] = ["Maybe Rakib", "Ripon Miah", "Mridul"];
    const friends2: string[] = ["Mehedi", "A Ahad", "Tonmoy"];

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

    const mentorList = {
        ...mentor1,
        ...mentor2
    };
    console.log(mentorList);

    // Learn Rest operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
    };
    greetFriends("Babul", "kabul")

    const addNumbers = (...num: number[]): number[]=>{
        return num
    }
    const numbers = addNumbers(23, 45, 56, 43);
    const num2 = addNumbers(21);
    console.log(numbers, num2)
};