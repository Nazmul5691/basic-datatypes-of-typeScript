// normal function
// arrow function



// normal function
// function add(num1, num2){
//     return num1 + num2
// }


// set type 
// function add(num1: number, num2: number): number{
//     return num1+num2
// }

function add(num1: number, num2: number = 20) : number{
    return num1 + num2
}

add(2,2)



// arrow function
// const addArrow = (num1, num2) => num1 + num2

// set type
const addArrow = (num1: number, num2: number): number => num1 + num2 


// object --> function --> method
const poorUser = {
    name: 'nazmul',
    balance : 0,
    // addBalance(balance : number): number{
    //     return this.balance + balance
    // }

    addBalance(balance: number): string{
        return `My new balance is : ${this.balance + balance}`;
    }
}

// const array = [2,5,20]

const array: number[] = [2, 5, 20]

const newArray : number[] = array.map((element: number): number => element * element)