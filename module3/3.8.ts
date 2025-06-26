{
    // polymorphism
    class Person {
        getSleep() {
            console.log("I am sleeping for 8 hours per day");
        }
    }

    class Student extends Person {
        getSleep() {
            console.log("I am sleeping for 7 hours per day");
        };
    }

    class Developer extends Person {
        getSleep() {
            console.log("I am sleeping for 6 hours per day");
        };
    }

    const gtSleepingHour = (param: Person) => {
        param.getSleep();
    }

    // create instance of person , student, and developer
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    // person1.getSleep(); // I am sleeping for 8 hours per day
    // person2.getSleep(); // I am sleeping for 7 hours per day
    // person3.getSleep(); // I am sleeping for 6 hours per day

    gtSleepingHour(person1); // I am sleeping for 8 hour per day
    gtSleepingHour(person2); // I am sleeping for 7 hour per day
    gtSleepingHour(person3); // I am sleeping for 6 hour per day

    // ------------------------------------------------------------
    //  calculate area
    class Shape {
        getArea(): number {
            return 0;
        }
    }
    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super()
            this.radius = radius
        }

        getArea(): number {
            return Math.PI * this.radius
        };
        // getSquareArea() {
        //     return this.radius * this.radius;
        // }
    };

    class Square extends Shape {
        radius: number;
        constructor(radius: number) {
            super()
            this.radius = radius;
        }
        getArea(): number {
            return this.radius * this.radius
        }
    };

    class Rectangle extends Shape {
        height: number;
        width: number;
        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width
        }
    }

    const shapeArea = (param: Shape) => {
        console.log(param.getArea())
    }
    //  create instance square area & Rectangle instance
    const circleArea = new Circle(6);
    const squareArea = new Square(4);
    const rectangleArea = new Rectangle(20, 10);


    shapeArea(circleArea)
    shapeArea(squareArea)
    shapeArea(rectangleArea)




    // 
}