




// Compiled language
// first Need to compile
// Ususally don't compile if there is an error in the code 
// Example=C,C++,Java,Rust


// Interpreted language
// usually go line by line 
// can run partially if the error comes later
// Like python, JavaScript 



// int *p
// p=(int*) malloc (sizeof(int))
// free(p)



// Memeory Management in JavaScript
// why we need memory management
// because we have limited resources in our system
//we don't need to manage memory in JavaScript which is partially true



// setTimeout(()=>{
//     console.log("Hello")
// },1000)


// setInterval(()=>{
//     console.log("Hello")
// },1000)




// var a = 5;
// let b=8

// const c= 10

// d = 40




// a = "Kathmandu"



// function fun1(){
//  var x  = 10
//    y  = 20

//    console.log(x,y)
// }

// fun1()
// console.log(x,y)




// Var is function scope
// let is block scope

// function fun2(){
//     {
//         var a = 20
//         let b = 30
//         console.log(a,b)
//     }

//     console.log(a,b)


// }

// fun2()




// var num1  = 20
// var num2  = 30


// let num3 = 20
// let num3 =30


// JavaScript has  primitive Data Type and One non-primitive
// JavaScript is Dynamically Typed Lanaguage

// String
// Number
// Boolean
// Null
// undefined
// Symbol
// Bigint => if we want to store large number 2 power 53 minus 1


// let s1 = "Suman"

// console.log(typeof (s1))


// Non primitive Type

// Object

// let ob

let sym = Symbol("hello")
// A Symbol is a unique and immutable value that is primarily used to create unique object keys

console.log(typeof(sym))

let a = [10,20,30]

console.log(Array.isArray(a))

console.log(a.length)




// Function is Also Object

// function f1(){
//     console.log("Suman")

// }


// f1.x = 10
// console.log(f1.x)

// console.log(f1 instanceof Object)