{
    //  conditional type

    type x = number;
    type y = undefined;

    type c = x extends number ? true : false;  // conditional type

    type b1 = x extends null ? true : y extends undefined ? undefined : any;


    type sheikh = {
        bike: String;
        car: string;
        ship: string;
    };

    // car ase kine | bike ase kina | ship ase kina
    type checkVehicle<T> = T extends "bike" | "car" | "ship" ? true : false; 

    type hasBike = checkVehicle<"bike">;
    type hasHonda = checkVehicle<"honda">;

    // example
    type checkVehicle1<T> = T extends keyof sheikh ? true : false;
    type hasCar = checkVehicle<"car">
}