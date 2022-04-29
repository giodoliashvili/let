//let user = {
// firstname: 'giorgi',
//lastname: 'smith',
// age: '25',
//studentstatus: 'active'
//};
//console.log(user.studentstatus);


// დავალება #2


//let numbers = [9, 12, 17, 22, ];
//for (let x = 0; x < 4; x++) {
//    console.log(numbers[x])
//}


//let z = 0;
//while (z < numbers.length) {
//   console.log(numbers[0]);
//    z++;
//}



// დავალება #3



//let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
//for (let x of numbers) {
//    if (x > 5) {
//        console.log(x);
//   }
//}


//დავალება #4


//let user = {
//   name: 'giorgi',
//   age: 18,
//  studentstatus: 'active',
//}
//if (user['age'] < 18 && user.studentstatus == 'active') {
//    console.log('hello');
//} else if (user.name == 'giorgi') {
//    console.log('hello giorgi');
//} else if (user.studentstatus == 'active' || user['age'] < 25) {
//    console.log('hello world');
//} else {
//    console.log('error');
//}

//დავალება #5



//let array = ['watermelon', 'pear', 10, 45, 50, 'Apple', 'ananas']
//for (let x of array) {
//    if (typeof x === 'string') {
//        console.log(x);
//    }
//}


//დავალება #6
//let array = [
//    [2, -3, 5, 10],
//    [25, -24, -11, 100],
//    [-6, -7, 10]
//]
//for (let i = 0; i < array.length; i++) {
//    let numbers = array[i];
//    for (let x = 0; x < numbers.length; x++) {
//        let positive = numbers[x];
//        if (positive > 0) {
//            console.log(positive);
//        }
//   }
//}



//დავალება #7
//let array = [32, 10, 'hello', null, 'hello2', 50];
//for (let i = 0; i < array.length; i++) {
//    const element = array[i];
//    if (typeof element == 'number' && element % 5 == 0) {
//        console.log(element);
//    }
//}