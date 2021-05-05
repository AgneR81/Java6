//Masyvai , kokie -dezute kuri turi daug lentynu i kurias kazka det
                   //  kompleksinis

//Ivairus duomenu tipai

// let masyvas = new Array;    pasenes nenaudojamas

letmasyvas2 = [];

let arr1 = [
    'Julius',
    {
        type: 'Js',                 //objektas
        age: 36
    },
    true,                           //boolean
    function () {
        return console.log('Labas!');
    }
];


console.log(arr1);
console.log('---------------');

// console.log(arr1[1].type);

// console.log(arr1[1].age);    //kaip pasiekti objekta
// console.log(arr1[0]);
// arr1[3]();

// let arr=[1,2,3,4,5,7]      //eiliskumas

//daugiamaciai masyvai

let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arr2[1][1]);      //kaipkoordinates istraukt 4

// kas yra funkcija ? ir metodas ?

// skirtumas: funkija mes parasome PaymentResponse, o metodas yra instaliuotas java scripote

let arr7 = ['Pirmas', 'Antras', 'Trecias'];

arr7.unshift('ooo');  //i prieki prideda
arr7.push('111', '222');   //prideda kazka i gala

console.log(arr7)

//shift pasalina pirma elementa

let arr8 = ['Pirmas', 'Antras', 'Trecias'];

delete arr8[1];
console.log(arr8);

let arr9 = ['Pirmas', 'Antras', 'Trecias'];

arr9.splice(0, 1);
console.log(arr9);

let arr10 = ['Pirmas', 'Antras', 'Trecias'];

let removed = arr10.splice(1, 1);
console.log(removed);

let arrr11 = ['Pirmas', 'Antras', 'Trecias'];

arrr11.splice(3, 1, '01');
console, log(arrr11);

let arrr1 = [1, 2, 3, 4, 5, 6, 7, 8];

let arrr1New = arrr1.concat('Push')

// console.log(arrr1New);

let arrObj = [
    { name: 'Paulius', age: 30 },
    { name: 'Arturas', age: 10 },
    { name: 'Simona', age: 20 },
];

// let result = arrObj.find(function (item, index, array) { //grazina yik pirmA
//     return item.age === 20;

// })
// console.log(result);

let result = arrObj.filter(function (item, index, array) {   //GRAZINA VISUS KUEIRE ATITINKA
    return item.age >= 20;

})

console.log(result);


let str = 'JUlius Paulius Ir dar kazkas';
let strRes = str.split(' ')

console.log(strRes);
console.log(strRes.join(':'));

//-----------------




