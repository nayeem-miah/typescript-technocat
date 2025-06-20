{

    // type assertion
    let anything: any;
    anything = "Next Level web development";
    anything = 344.54545;
    (anything as number).toFixed(2);
    // console.log(anything);

    // function
    const kgToGm = (value: string | number): string | number | undefined => {
        
        if (typeof value === "string") {
            const convertedValue = parseFloat(value);
            return `converted value is ${convertedValue * 1000}`;
        } else if (typeof value === "number") {
            return value * 1000;
        } else {
            return `please give me a valid input number`
        }
    };
    const result1 = kgToGm(10) as number;
    const result2 = kgToGm("230") as string;
    console.log(result1, result2);
    

    // try catch block
    type CustomError = {
        message: string;
    }
    try {
        console.log("this is try block");
    } catch (error) {
        console.log((error as CustomError).message);
    }




}