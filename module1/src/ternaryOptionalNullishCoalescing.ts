{

    // ternary operate || optional changing || nullish coalescing operator

    const age = 10;

    if( age >=18){
        // console.log('adult');
    }
    else{
        // console.log('not adult');
    }

    const isAdult = age >=18 ? 'adult' : 'not adult'
    // console.log(isAdult);


    // nullish coalescing operator
    // null / undefined --> decision making         use when need decision making based on null/undefined


    // const isAuthenticated = null;
    // const isAuthenticated = undefined;
    const isAuthenticated = '';

    const result1 = isAuthenticated ?? 'guest'
    const result2 = isAuthenticated ? isAuthenticated : 'guest'

    // console.log({result1}, {result2});

    type User = {
         name: string;
         address: {
            city: string;
            road: number;
            presentAddress: string;
            permanentAddress?: string;
         }
    }

    const user: User = {
        name: 'nazmul',
        address: {
            city: 'dhaka',
            road: 11,
            presentAddress: 'tangail',
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent address'
    console.log(permanentAddress);



}