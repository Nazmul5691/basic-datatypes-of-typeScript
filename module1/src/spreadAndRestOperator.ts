// spread operator
// rest operator


// spread operator
// const bros1: string[] = ['Nazmul', 'Minhaz', 'Hridoy']
// const bros2: string[] = ['Abul', 'Kabul', 'Babul']

// bros1.push(...bros2)
// console.log(bros1);

const bros1: string[] = ['Nazmul', 'Minhaz', 'Hridoy'];
const bros2: string[] = ['Abul', 'Kabul', 'Babul'];

bros1.push(...bros2); // Spread elements of bros2 into bros1
console.log(bros1);


const list1 = {
    teacher: 'abul',
    farmer: 'kabul',
    actor: 'sakib'
}

const list2 = {
    doctor: 'rakib',
    pilot: 'nazmul',
}

const newList = {
    ...list1,
    ...list2,
}
// console.log(newList);




// rest operator

// const greetFriends = (frnd1: string, frnd2: string, frnd3: string) =>{
//     console.log(`hi ${frnd1} ${frnd2} ${frnd3}`);
// }

// greetFriends('nazmul', 'abul', 'kabul')


// const greetFriends = (...friends: string[]) =>{

//     friends.forEach((friend:String) =>{
//         console.log(friend);
//     })
// }

// greetFriends('nazmul', 'abul', 'kabul')


const greetFriends = (...friends: string[]) =>{
    return friends;
}

const allFriends = greetFriends('nazmul', 'abul', 'kabul')

console.log(allFriends);






