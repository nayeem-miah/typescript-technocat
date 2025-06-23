{
    // oop --> inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        };
        // create method
        getSleep(numOfHour: number) {
            console.log(`name: ${this.name} will sleeping time is ${numOfHour}`);
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        };
    };  

    // create instance
    const student = new Student("MR. Z", 21, "UN");
    student.age;
    student.getSleep(7)

    // teacher class
    class Teacher extends Person{
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        };

        // method
        getClass(classTime: number) {
            console.log(`${this.name} will class time is ${classTime} hour`);
        }
    };

    const teacher = new Teacher("MR Y", 32, "BD", "professor");
    teacher.name = "MR Z"; // change name property value;
    teacher.getClass(7);
    teacher.getClass(6);

    // 
}