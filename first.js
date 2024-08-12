//sayHello(); // TypeError: sayHello is not a function
// var sayHello = function() {
//     console.log("Hello!");
// };
// sayHello();
// let fname = document.getElementById('firstname').value;
// let lname = document.getElementById('lastname').value;
// fname = 'abishek'
// console.log(fname.split(''));

// var arr = [1,2,3,4,4]
// const filterArr = arr.filter((element)=>{
//     if (element % 2===0)
//     {
//         console.log(arr.element);
//     }
// });
// console.log(filterArr);

const names = ['Alice', 'Bob', 'Charlie', 'David'];
const ages = [15, 20, 30, 40];

// const lengthName = names.reduce((a,nam)=>{
//     return a+nam.length;
// },0
// );
// console.log("length of the total string: "+lengthName);

const mapNA = names.filter((nam)=>{
    return nam.length;
});
console.log(mapNA);