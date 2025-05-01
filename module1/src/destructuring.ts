{



const user = {
    name: 'nazmul',
    address: {
        village: 'tangail',
        house: '22',
        road: 'askona'
    },
    contactNo: '0188888899',
}


const { name, address: {house} } = user   // const { name: string, address: {house} } = user, don't declare the type like this never do this cause its alias the value

const myFriends = ['abul', 'babul', 'kabul', 'mokbul', 'mukul', 'pakul']

// const [a, b, c] = myFriends
// const [a, b, bestFriend] = myFriends
// const [, , bestFriend] = myFriends
const [, , bestFriend, ...rest] = myFriends
// console.log(bestFriend, ...rest);





}

