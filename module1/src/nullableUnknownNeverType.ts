{
    // nullable type


    const searchName = (value: string | null) => {
        if (value) {
            // console.log('searching');
        }
        else {
            // console.log('nothing found');
        }
    }

    // searchName('search')
    searchName(null)



    // unknown typeof

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertSpeed = (value * 1000) / 3600
            console.log(`the speed is ${convertSpeed} ms^1`);
        }

        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ')
            const convertSpeed = (parseFloat(result) * 1000) / 36000;
            console.log(`the speed is ${convertSpeed} ms^1`);
        }

        else {
            console.log('wrong input');
        }
    }

    
    getSpeedInMeterPerSecond(null)
    // getSpeedInMeterPerSecond('1000 ms^1')
    // getSpeedInMeterPerSecond('1000')




    // never typeof
    // const throwError = (msg: string) =>{
    //     throw new Error(msg)
    // }

    // throwError('error r error error moy life')


    const throwError = (msg : string) =>{
        throw new Error(msg)
    }

    throwError('error moy life')
    
}