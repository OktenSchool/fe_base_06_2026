// let listOfItemsAdvanced = ['html advanced', 'css advanced', 'javascript advanced', 'mysql advanced', 'mongodb advanced', 'react advanced', 'angular advanced', 'node.js advanced'];
//
// function foobar(list) {
//     for (const item of list) {
//         document.write(`<p>${item}</p>`);
//     }
//
// }
//
// // foobar() // list = undefined -> error
//
// foobar([11, 22, 33]); // list = [11,22,33]
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// foobar(listOfItems); // list = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']
//
//
// let listOfNumbers = [11, 22, 33];
// foobar(listOfNumbers); // list = listOfNumbers = [11,22,33]
//
// foobar(listOfItemsAdvanced);


let user1 = {name: 'vasya', age: 31, status: false}
let user2 = {name: 'petya', age: 30, status: true}
let user3 = {name: 'kolya', age: 29, status: true}
let user4 = {name: 'olya', age: 28, status: false}
let user5 = {name: 'max', age: 30, status: true}
let user6 = {name: 'anya', age: 31, status: false}
let user7 = {name: 'oleg', age: 28, status: false}
let user8 = {name: 'andrey', age: 29, status: true}
let user9 = {name: 'masha', age: 30, status: true}
let user10 = {name: 'abrikos', age: 2, status: false}
let user11 = userGenerator('anna', 54, true)


function userGenerator(customName, customAge, customStatus) {
    let user = {name: customName, age: customAge, status: customStatus}
    return user;
}

let data1 = userGenerator('vasya', 31, true);
console.log(data1);
console.log(userGenerator('petya', 32, false));



