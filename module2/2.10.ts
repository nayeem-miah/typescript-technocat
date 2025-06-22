{
    // mapped types 
    const arrayOfNumbers: number[] = [2, 3, 45, 6];

    // convert array of string 
    // const arrayOfString: string[] = ["2", "3", "45", "6"];
    const arrayOfString = arrayOfNumbers.map(number => number.toString());
    console.log(arrayOfString);

    // area number
    type AreaNumber = {
        width: number;
        height: number;
    };
    type height = AreaNumber["height"]; //look up type

    // type AreaString = {
    //     width: string;
    //     height: string;
    // };

    type AreaString = {
        [key in keyof AreaNumber]: string;
    };

    // example:
    type AreaString1<T> = {
        [key in keyof T]: T[key];
    };
    const area1: AreaString1<{ height: string, width: number }> = {
        height: "340",
        width: 20
    };
    console.log(area1);

}