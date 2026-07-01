// > < >= <= == === != !==
// let bool1 = 3 === 3;
// console.log(bool1)

// console.log(3 !== '3');

// let age = +prompt("What is your age?");

// let age = +prompt("What is your age?");
//
// if (age >= 18) {
//     let isWoman = confirm('ви жінка?');
//     if (isWoman) {
//         console.log('oke!');
//     } else {
//         console.log('this is not your site')
//     }
//
// } else {
//     console.log('nope! because your age is - ' + age);
// }


// let isAdult = confirm('Are you older than 17?');
//
// if (isAdult) {
//     let isWoman = confirm('ви жінка?');
//     if (isWoman) {
//         console.log('oke!');
//     } else {
//         console.log('this is not your site')
//     }
//
// } else {
//     console.log('nope!');
// }


// console.log(true && false) // false
// console.log(false && true) // false
//
// console.log(true && true) // true

//
// let isAdult = confirm('Are you older than 17?');
// let isWoman = confirm('ви жінка?');
//
// if (isAdult && isWoman) {
//     console.log('oke!');
// } else {
//     console.log('nope!');
// }


// let isAdult = confirm('Are you older than 17?');
// let isWoman = confirm('ви жінка?');
// let isForPresent = confirm('це на подарунок для дружини?')
//
// true || false - true
// false || false - false

//          true         ||      false   = true
//    true        true
// if ((isAdult && isWoman) || isForPresent) {
//     console.log('oke!');
// } else {
//     console.log('nope!');
// }


// let isAdult = confirm('Are you older than 17?');
// let isWoman = confirm('ви жінка?');
//
// let isForPresent = confirm('це на подарунок для дружини?')
//
//
//
// if (isAdult && isWoman) {
//     console.log('oke!');
// } else if (isForPresent) {
//     console.log('ok')
// } else {
//     console.log('??????!!!!');
// }


let season = 'spring'

switch (season) {
    case 'winter':
        console.log('winter jacket');
        break;

    case 'summer':
        console.log('t-shirt');
        break;

    case 'autumn':
    case 'spring':
        console.log('leather jacket');
        break;

    default:
        console.log('season jacket????? ');

}


// let age = 100500;
// console.log('my age is - ' + age);
// console.log(`my age is - ${age}`);

// isAdult && isWoman || isAdult && isForPresent
