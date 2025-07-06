// const district = ["palpa", "Lalitpur", "Bhaktpur", "kritpur", "Kathmandu"];
// const province=["lumbini","bagmati","gandaki","karnali","sudurpaschim","sudurpaschim"];

// const newArr= district.concat(province);

// console.log(newArr);

// const newArr = [...district, ...province];

// const newArr = arr.splice(2, 3, "Pokhara", "Chitwan", "Butwal");

// console.log(arr);

// const user = {

//     name: "Ram",
//     age: 25,
//     address: "Kathmandu",
//     email: "sumanbhandari@gmail.com",
// }

// console.log(user["name"]);

// for(let i=0;i<10;i++){
//     console.log(i);
// }



///

// function sum(){
//     let a=10;
//     let b=20;
//   return a+b;

// }

// const sum=()=>{
    
// }

// console.log(sum());

// 3/12/2015

// let obj = { name: "Ram", age: 25, address: "Kathmandu" };
// console.log(obj["name"]);

// for (let key in obj){
//   console.log(key, obj[key]);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i of arr){
//   console.log(i);
// }


// const obj= new Object();

// obj.name="Ram";

// console.log(obj)


//2/12/2025

// window.document.documentElement
//document.head
//document.body
// const head= document.querySelector(".container")
// const all_container= document.querySelectorAll(".container")

// console.log(head)
// console.log(all_container)

// let array= [...all_container]

// const firt_container= array[0]

// console.log(firt_container.innerHTML)

// //https://0xedward.github.io/dom-visualizer/


// let value1 = prompt("Enter a Name");

// let container1= document.querySelector(".container1")
// container1.innerHTML= `<h1>${value1}</h1>`  //string interpolation;

// console.log(value1)
// if (value1 == 10) {
//     document.getElementById("js").innerText = "Success"
// }
// else {
//     document.getElementById("js").innerText = "Fail"
// }

// setTimeout(() => {
//             console.log("Hello World")
//         }, 2000);

// setInterval(() => {
//             console.log("Hello World")
//         }, 2000);


// document.querySelector("form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevents the page from reloading
//     let value1 = prompt("Enter a Name");
//     document.querySelector(".container1").innerHTML = `<h1>${value1}</h1>`;
// });



// const square = (a)=>{
//     return a*a;
// }
// function sumOfSomthing(a,b,fn){
//     const val1=fn(a);
//     const val2=fn(b);
//     return val1+val2;
// }

// console.log(sumOfSomthing(2,3,square));


// let n=10
// let sum=0
// for(let i=1;i<=n;i++){
//     sum+=i
// }
// console.log(sum)



//Synchronous and Asynchronous
 

// function findSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }


// function findSum100(){
//    console.log(findSum(100)) ;
// }


// setTimeout(findSum100, 100);
// console.log("Hello World");



// const fs=require("fs");






//It is the first parameter in the callback function of fs.readFile(), following Node.js's convention of error-first callbacks.




// for (let i=0;i<1000000;)

//Event Loops


//Call back Hell

// function read_file(fn){
//     fs.readFile("hello.txt","utf-8",(err,data)=>{
//         fn(data);
//     })
    
// }

// function printFileData(data){
//     console.log(data);
// }

// read_file(printFileData);


// function read_file(fn){
//     return new Promise((resolve,reject)=>{
//         fs.readFile("hello.txt","utf-8",(err,data)=>{
//             fn(data);
//             resolve()
//         })
//     })
    
// }


//


// let radius=[2,3,4,5,6]

// const calculateArea=function(radius){
//     return Math.PI*radius*radius;
// }


// const arr=[1,2,3,4,5,6,7,8]


// function docuble(x){
//     return x.toString(2)
// }

// const newArr=arr.map(docuble)

// const newArr1=arr.filter((x)=>{
//     return x<=3
// })


// console.log(newArr1)


// const arr=[1,2,6,4,5]

// const sum=arr.reduce((acc,curr)=>{
//     console.log("ACC",acc)
//      if(acc<curr){
//         console.log(acc)
//          acc=curr
//          return acc
//      }

//      return "Mero BABU"
     
// },0)

// console.log(sum)

//Java Script is synchronous and Single threaded language
//pyramid of doom
// inversion of control


const cousre=["React","Angular","Vue","Node","Express","MongoDB"]





// function firstTask(callback){
//     console.log("First Task")
//     setTimeout(()=>{
//         callback()
//     },1000)
// }

// function secondTask(callback){
//     console.log("Second Task")
//     setTimeout(()=>{
//         callback()
//     },1000)
// }


// function selectItem (callback){
//     setTimeout(()=>{
//         callback()
//         console.log("Item Selected")
//     },1000)

// }

// function addToCart(callback){
//     setTimeout(()=>{
//         console.log("Item Added to Cart")
//         callback()
//     },1000)
// }

// function payment(callback){
//     setTimeout(()=>{
//         console.log("Payment Done")
//         callback()
//     },1000)
// }


// selectItem(()=>{
//     addToCart(()=>{
//         payment(()=>{
//             console.log("Order Placed")
//         })
//     })
// })



// Handling the async operation in javaScript using promise

// const promise= new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("Hello World") 
//     // },2000)
   
//     if(false){
//         resolve("Hello World")
//     }   
//     else{
//         reject("Error")
//     }
// })

// console.log(promise)

// promise.then((data)=>{
//     console.log(data)
//     return "Hello form bhai"
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Finally")
// })

function selectItem() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Item Selected");
            resolve();
        }, 1000);
    });
}

function addToCart() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Item Added to Cart");
            resolve();
        }, 1000);
    });
}

function payment() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Payment Done");
            resolve();
        }, 1000);
    });
}

// Chaining promises
// selectItem()
//     .then(addToCart)
//     .then(payment)
//     .then(() => console.log("Order Placed"))
//     .catch(error => console.log("Error:", error));




function test(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello World")
        },2000)
    })
}


const p1 = test().then((data)=>{
    console.log("Inside then",data)
   
})

console.log(p1)


async function placeOrder() {
    console.log("Placing Order...");

    await selectItem();
    await addToCart();
    await payment();

    console.log("Order Placed");
}

// Call the function
placeOrder();

