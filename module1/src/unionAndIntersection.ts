{


    // union
    // type FrontEndDeveloper = 'FakiBazDeveloper' | 'juniorDeveloper'

    // const newDeveloper: FrontEndDeveloper = 'juniorDeveloper'

    // type BackEndDeveloper = 'frontendDeveloper' | 'FullStackDeveloper'

    // type Developer = FrontEndDeveloper | BackEndDeveloper

    // const newDeveloper: Developer = 'juniorDeveloper'




    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        bloodGroup: 'O+' | 'AB+' | 'O-'
    }

    const user: User = {
        name: 'nazmul',
        email: 'kjshdfkjadshf',
        gender: 'male',
        bloodGroup: 'O+'
    }



    //intersection

    type FrontEndDeveloper = {
        skills: string[];
        role1: 'Front End'
    }

    type BackEndDeveloper = {
        skills: string[];
        role2: 'Back End'
    }

    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['c++', 'python', 'java'],
        role1: 'Front End',
        role2: 'Back End'
    }











}