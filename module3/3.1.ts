{   
    // oop

    // create class
    class Animal {
        // name: string;
        // species: string;
        // sound: string;

        // constructor
        constructor(public name: string,public species: string,public sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound
        };

        // crate method
        soundMake() {
            console.log(`this ${this.name} sound is ${this.sound}`); 
        }
    };


    // crate instance ------------------- Access property and method
    const cat = new Animal("USA winds", "cat", "mew mew ........");
    const dog = new Animal("bd dog", "dog", "gaw gaw gaw............");
    cat.name;
    cat.soundMake();
    dog.soundMake();
    // 
};