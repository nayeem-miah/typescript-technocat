{
    //  instanceof guard
    class Animal {
        name: string;
        species: string;
        

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }
        makeSound() {
            console.log("I am making sound");
        }
    };

    class Dog  extends Animal{
        color: string;

        constructor(name: string, species: string, color: string) {
            super(name, species)
            this.color = color;
        }
        makeBark() {
            console.log("I am Barking........");
        }
    }

    //  creating class --> cat
    class Cat  extends Animal{
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMew() {
            console.log("I am make mewing");
        }
    };


    //  smart valbe korer jonno function use kotta pari
    const isDog = (animal: Animal)=>{
        return animal instanceof Dog;
    }
    isDog(dog)
    const getAnimal = (animal: Animal) => {
        // animal.makeBark() //roperty 'makeBark' does not exist on type 'Animal'

        if (animal instanceof Dog) {
            animal.makeBark();
        } else if(animal instanceof Cat) {
            animal.makeMew();
        } else {
            animal.makeSound();
        }
    }

    //  create instance 
    const dog = new Animal("mong", "dog");
    // Dog extends Animal 
    const dog2 = new Dog("ces dog", "dog", "black");
    // Cat extends Animal 
    const cat = new Cat("holy cat", "cat");
    // dog2.makeSound();
    // dog2.makeBark()

    // cat.makeSound();
    // cat.makeMew();
    // getAnimal(dog);
    getAnimal(new Dog("doge", "eng dog", "black"));
    getAnimal(new Animal("doge", "eng dog"));









    // 
}