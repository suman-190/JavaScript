### JavaScript Promises – From Basics to Advanced

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

---

## 🔹 **Understanding Promises**
A Promise has three states:

1. **Pending** – The operation has started but is not yet completed.
2. **Fulfilled (Resolved)** – The operation completed successfully.
3. **Rejected** – The operation failed.

---

## 🔹 **Creating a Promise**
A Promise is created using the `new Promise()` constructor, which takes a function with two parameters: `resolve` and `reject`.

### **Example 1: Basic Promise**
```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;  // Change this to false to test rejection

    if (success) {
        resolve("Operation was successful!");  // Fulfilled
    } else {
        reject("Something went wrong!");       // Rejected
    }
});

// Consuming the Promise
myPromise
    .then(result => console.log(result))   // Runs if resolved
    .catch(error => console.log(error));  // Runs if rejected
```

---

## 🔹 **Chaining Promises**
You can chain `.then()` to handle multiple asynchronous operations.

### **Example 2: Promise Chaining**
```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1: Data fetched"), 2000);
});

fetchData
    .then(result => {
        console.log(result);
        return "Step 2: Processing data"; // Pass data to the next `.then()`
    })
    .then(nextStep => {
        console.log(nextStep);
        return "Step 3: Displaying data";
    })
    .then(finalStep => console.log(finalStep))
    .catch(error => console.log("Error:", error));
```

---

## 🔹 **Handling Errors with `.catch()`**
If any step in the promise chain fails, `.catch()` will handle the error.

### **Example 3: Error Handling**
```javascript
const errorExample = new Promise((resolve, reject) => {
    setTimeout(() => reject("Network error!"), 2000);
});

errorExample
    .then(result => console.log(result))
    .catch(error => console.log("Caught error:", error));  // Handles rejection
```

---

## 🔹 **Using `finally()`**
`.finally()` runs regardless of whether the Promise was resolved or rejected.

### **Example 4: Using `.finally()`**
```javascript
const fetchDataAgain = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 2000);
});

fetchDataAgain
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error))
    .finally(() => console.log("Operation finished!"));
```

---

## 🔹 **Promise Methods**
JavaScript provides helper methods for working with multiple promises:

### 1️⃣ `Promise.all()` – Runs all promises in parallel and waits for all to resolve.
```javascript
const p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 done"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 done"), 2000));

Promise.all([p1, p2]).then(results => console.log(results));  // ["Promise 1 done", "Promise 2 done"]
```

### 2️⃣ `Promise.race()` – Returns the result of the first resolved/rejected promise.
```javascript
Promise.race([p1, p2]).then(result => console.log(result));  // "Promise 1 done" (since it resolves first)
```

### 3️⃣ `Promise.allSettled()` – Waits for all promises, even if some fail.
```javascript
const p3 = new Promise((_, reject) => setTimeout(() => reject("Promise 3 failed"), 1500));

Promise.allSettled([p1, p3]).then(results => console.log(results));
```

### 4️⃣ `Promise.any()` – Returns the first successfully resolved promise (ignores rejections).
```javascript
Promise.any([p3, p1]).then(result => console.log(result));  // "Promise 1 done"
```

---

## 🔹 **Async/Await (Alternative to `.then()`)**
Instead of `.then()`, we can use `async` and `await` for cleaner code.

### **Example 5: Using `async/await`**
```javascript
function fetchDataAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data fetched!"), 2000);
    });
}

async function handleData() {
    console.log("Fetching data...");
    const result = await fetchDataAsync();  // Waits until resolved
    console.log(result);
}

handleData();
```

---

## 🔹 **Conclusion**
- Promises handle asynchronous operations efficiently.
- `.then()`, `.catch()`, and `.finally()` help manage execution flow.
- `Promise.all()`, `Promise.race()`, and other methods manage multiple promises.
- `async/await` makes code more readable.

