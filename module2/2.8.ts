{
    // promise and data fetching

    // simulator

    type User = {
        name: string; email: string; address: string
    };
    type todos = {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }
    const getTodo = async ():Promise<todos[]> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");

        const data: todos[] = await res.json();
        console.log(data);
        return data;
    };
    const getData = getTodo();
    console.log(getData);



    const cratePromise = (): Promise<User> => {
        return new Promise<User>((resolve, reject) => {
            const data: {
                name: string; email: string; address: string
            } = {
                name: "MR Rah",
                email: "mr@gmail.com",
                address: "Dhk"
            };
            if (data) {
                resolve(data);
            } else {
                reject("failed to fetch")
            }
        })
    };


    const showData = async (): Promise<User> => {
        const data: User = await cratePromise();
        console.log(data);
        return data;
    };
    showData()


    // example --------------
    const createPromise2 = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            const data: string = "something...."
            if (data) {
                resolve(data)
            } else {
                reject("failed to fetching data")
            }
        })
    };

    const showData2 = async(): Promise<string> => {
        const data: string = await createPromise2();
        console.log(data);
        return data;
    };
    showData2()
        

    // 
}
// npm i ts-node-dev --save-dev
// ts-node-dev --respawn --transpile-only server.ts