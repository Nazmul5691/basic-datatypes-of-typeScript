const user: {
    firstName: string;
    middleName?: string;  //optional type
    lastName: string;
    isMarried: boolean;
    // company: string;
    // company: 'Programming Hero'  //literal types
    // readonly company: string;   
    company: string;   
} = {
    firstName: 'Nazmul',
    lastName: 'Nazmul',
    isMarried: false,
    company: 'Programming Hero BD'
}

user.company = 'ph'