{
    // constraints
    const addCourseStudent = <T extends {
        id: number;
        name: string;
        email: string;
    }>(student: T) => {
        const course = "Next Level web development";
        return {
            ...student,
            course
        }
    };

    const student1 = addCourseStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 23,
        name: "x",
        email: "x@gmail.com",
        devType: "NLW"
    });
    const student2 = addCourseStudent<{
        id: number;
        name: string;
        email: string;
        hasWatch: string;
    }>({
        id: 24,
        name: "T",
        email: "t@gmail.com",
        hasWatch : "Apple"
    });
    const studentObj = {
        id: 12,
        name: "tester",
        email: "tester@gmail.com",
    }
    const student4 = addCourseStudent<{
        id: number;
        name: string;
        email: string;
    }>(studentObj);
}

