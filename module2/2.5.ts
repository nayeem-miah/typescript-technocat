{
    // function with generics
    const createArray = (param: string): string[] => {
        return [param]
    }
    // generics 
    const createArrayWithGenerics = <T>(param: T): T[] => {
        return [param]
    };


    type User = { id: number; name: string };
    const result = createArray("Bangladesh");
    const result1 = createArrayWithGenerics<boolean>(true);
    const result2 = createArrayWithGenerics<string>("India");
    const resWithGenericObj = createArrayWithGenerics<User>({id: 34, name: "Nayeem"})

    // tuple
    const createArrayWithTuple = <T, X>(param1: T, param2: X): [T, X] => {
        return [param1, param2];
    };
    
    interface EmailWithUser { 
        name: string;
        email: string;
    };
    const resultWithTuple = createArrayWithTuple<string, number>("nayeem", 34);
    const resultWithTupleObject = createArrayWithTuple<number, EmailWithUser>(23, { name: "abdul", email: "x@gmail.com" });


    // example : 
    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course
        }
    };
    interface StudentInfo{
        name: string;
        studentId: number;
        age: number;
    };

    const student = addCourseToStudent<string>("jere");
    const student2 = addCourseToStudent<boolean>(true);
    const studentObj = addCourseToStudent<StudentInfo>({ name: "HD. Y", studentId: 34, age: 23 });
};