{

    type Student = {
        name: string;
        age: number;
        gender: string;
        address: string;
    }



    const student1: Student = {
        name: 'nazmul',
        age: 25,
        gender: 'male',
        address: 'tangail'
    }



    const student2: Student =
    {
        name: 'akash',
        age: 20,
        gender: 'male',
        address: 'tangail'
    }



    type UserName = string;
    const userName: UserName = 'abul'

    type IsAdmin = boolean;
    const isAdmin: IsAdmin = true;


    // const add = (num1: number, num2: number): number => num1 + num2

    type Add = (num1: number, num2: number) => number
    const add: Add = (num1, num2) => num1 + num2;


}