{
    //  static and dynamically
    class Counter {
        static count: number = 0;

        static increment() {
            return (Counter.count = Counter.count + 1)
        };
        // increment() {
        //     return (Counter.count = Counter.count + 1)
        // };


        // decrement() {
        //     return (Counter.count = Counter.count - 1);
        // };

        static decrement() {
            return (Counter.count = Counter.count - 1);
        };
    };
    // const instance1 = new Counter();
    console.log(Counter.increment());  // 1
    console.log(Counter.increment()); // 2 
    // console.log(instance1.increment()); // 3

    // const instance2 = new Counter();
    console.log(Counter.increment());  // 1  --> using static then Counter.count 4
    // console.log(instance2.increment()); // 2 --> using static then Counter.count 5


}