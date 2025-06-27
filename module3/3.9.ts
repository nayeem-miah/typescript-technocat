{
    // abstraction  1. interface  2. abstract
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    };
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("I am starting the car engine");
        };
        stopEngine(): void {
            console.log("I am stopping the car engine");
        };
        move(): void {
            console.log("I ma moving the car engine");
        };
        test() {
            console.log("I am just testing");
        }
    }
    // idea
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void;
        test() {
            console.log("I am just 2 testing");
        }
    }
    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(" I am startEngine the car");
        };
        stopEngine(): void {
            console.log(" I am stopping the car engine");
        };
        move(): void {
            console.log("The car moving");
        }
    };


    //  create car instance
    const toyotaCar = new Car1();
    // const test = new Car2();
    // test.stopEngine()
    toyotaCar.startEngine()






    // 
}