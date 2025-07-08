

// let userName = prompt("Please enter your name:");

// console.log(userName)

// setTimeout(()=>{
//    console.log("JavaScript")
// },3000)

// console.log(5+'5')


/**Control Statement */

// Decision Control statements

// if
// else
// else if
// ?:
// switch

// let num1 = 23
// if(num1>0){
//     console.log("Positive")

// }
// else{
//     console.log("Negative")
// }

// let res = num1>0?"Positive":"Negative"
// console.log("Result",res)


// let marks = 45

// if (marks > 90){
//     console.log("A")
// }

// else if (marks > 80){}


// Switch Case

// let x = 3
// switch(x){
//     case 1:
//         console.log("Case 1")
//     case 2:
//         console.log("Case 2")
//         break    
//     case 3:
//         console.log("Case 3") 
        
//     case 3:
//         console.log("Case 3") 
//     default:
//         console.log("Invalid")    
// }



// Iterative Control Statement


// while
// do while
// for 
// for in 
// for of


// let i = 1
// while(i<=5){
//     console.log("Hello")
//   i++
// }

// console.log("Outside Loop")


// do{
// console.log("Inside Do while Loop")
// }
// while(false)




// for (let i=1;i<5;i++){
//     console.log(i)
// }




// let obj = {
//     "name":"Devin",
//     "category":"Ai software Engineer"
// }


// for (a in obj){
//     console.log(a)
//     console.log(obj.a)
//     // This line is incorrect because a is a variable, not a key named "a".
//     console.log(obj[a])
// } 


// let arr1 = [20,40,40,21,24]
// for (a of arr1){
//     console.log(a)
// }


// Jump Statement
// break
// continue
// return


// Array

// const arr1 = [10,20,30,21]
// arr1[6]=50
// console.log(arr1)
// console.log(arr1.length)

// const arr2 = new Array();
// const arr3 = new Array(3);
// console.log(arr3)


// let ar1  = [2,3,4,5]
// let ar2 = ar1



/**
 * 
 * Spider-Man (Peter Parker)

Iron Man (Tony Stark)

Captain America (Steve Rogers)

Thor

Hulk 

Black Panther 

Doctor Strange

Scarlet Witch 

Ant-Man 

Wolverine 

Deadpool 

Black Widow 
Superman 

Batman 

Wonder Woman 

Flash 

Aquaman 
 */

// const arr1 = ["Batman","Wonder Women","Flash"]
// // arr1=["Hulk"]

// arr1.concat(["Hulk","Loki"])


// const li1 =  [21,20,24,34]

// li1.sort()

// console.log(li1)



















/**
 * JavaScript Code:
javascript
Copy
Edit
let units = 350; // You can change this to test different values
let bill = 0;

if (units <= 100) {
    bill = 0;
} else if (units <= 200) {
    bill = (units - 100) * 5;
} else if (units <= 300) {
    bill = (100 * 5) + (units - 200) * 7;
} else {
    bill = (100 * 5) + (100 * 7) + (units - 300) * 10;
}

console.log("Units Consumed:", units);
console.log("Total Bill: ₹" + bill);
Explanation:
If units = 350,

First 100 → Free

Next 100 (101–200) → ₹5 × 100 = ₹500

Next 100 (201–300) → ₹7 × 100 = ₹700

Remaining 50 units (301–350) → ₹10 × 50 = ₹500
👉 Total = 0 + 500 + 700 + 500 = ₹1700


 */












// let bt1 = document.querySelector('.increment_btn')
// let bt2 = document.querySelector('.decrement_btn')

// let value = 0

// document.querySelector('.value-container').innerText = value

// bt1.addEventListener("click",()=>{
//     value++
//     document.querySelector('.value-container').innerText = value
// })

// bt2.addEventListener("click",()=>{
//     value--
//     document.querySelector('.value-container').innerText = value
// })
// console.log(bt1)
// console.log(bt2)




