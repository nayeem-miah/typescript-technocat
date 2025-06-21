{
    // interface generic
    interface Developer <T,Y= null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T,
        bike? : Y
    };

    type EmilWatch ={
        brand: string;
        model: string;
        releaseYear: number;
    };
    const poorDeveloper: Developer<EmilWatch> = {
        name: "pase",
        computer: {
            brand: "Lenovo",
            model: "t480s",
            releaseYear: 2021
        },
        smartWatch: {
            brand: "Emailab",
            model: "454e",
            releaseYear : 2025
        }
    };

    interface AppleWatch {
        brand: string;
        model: string;
        heratTrack: boolean;
        sleepTrack: boolean;
    };
    interface BikeDev {
        brand: string;
        model: string;
    };
    const richDeveloper: Developer<AppleWatch, BikeDev> = {
        name: "john",
        computer: {
            brand: "Mac",
            model: "app3e",
            releaseYear: 2024
        },
        smartWatch: {
            brand: "apple",
            model: "4e",
            heratTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: "Suzuki",
            model: "GXR"
        }
    };





    // 
}