"use strict";
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
function add(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    return num1 + num2;
}
add(2, 2);
// arrow function
// const addArrow = (num1, num2) => num1 + num2
// set type
var addArrow = function (num1, num2) { return num1 + num2; };
// object --> function --> method
var poorUser = {
    name: 'nazmul',
    balance: 0,
    // addBalance(balance : number): number{
    //     return this.balance + balance
    // }
    addBalance: function (balance) {
        return "My new balance is : ".concat(this.balance + balance);
    }
};
// const array = [2,5,20]
var array = [2, 5, 20];
var newArray = array.map(function (element) { return element * element; });
