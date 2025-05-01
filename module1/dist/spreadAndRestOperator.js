"use strict";
// spread operator
// rest operator
// spread operator
// const bros1: string[] = ['Nazmul', 'Minhaz', 'Hridoy']
// const bros2: string[] = ['Abul', 'Kabul', 'Babul']
// bros1.push(...bros2)
// console.log(bros1);
var bros1 = ['Nazmul', 'Minhaz', 'Hridoy'];
var bros2 = ['Abul', 'Kabul', 'Babul'];
bros1.push.apply(bros1, bros2); // Spread elements of bros2 into bros1
console.log(bros1);
