ES6 Promises
======================

-   By Johann Kerbrat, Engineering Manager at Uber Works
-   Weight: 1
-   Your score will be updated as you progress.

Concepts
--------

*For this project, students are expected to look at these concepts:*

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
-   [JavaScript Promise: An introduction](https://web.dev/promises/)
-   [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
-   [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
-   [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

Background Context
------------------

Learn and implement ES6 Promises to handle asynchronous operations in JavaScript.

![Project Image](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/75862d67ca51a042003c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250518%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250518T034434Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=dbb0293022002667a2e02a26c4bf53d460cdde4b36da9f083cd9deef9d490e62)

Resources
---------

**Read or watch**:

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
-   [JavaScript Promise: An introduction](https://web.dev/promises/)
-   [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
-   [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
-   [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-technique/), **without the help of Google**:

### General

-   Promises (how, why, and what)
-   How to use the `then`, `resolve`, `catch` methods
-   How to use every method of the Promise object
-   Throw / Try
-   The `await` operator
-   How to use an `async` function

Requirements
------------

### General

-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node` 20.x.x and `npm` 9.x.x
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is required
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using `ESLint`
-   All of your functions must be exported

Setup
-----

### Install NodeJS 20.x.x

*(in your home directory):*

```
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
```

### Install Jest, Babel, and ESLint

*in your project directory:*

-   Install Jest using: `npm install --save-dev jest`
-   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli`
-   Install ESLint using: `npm install --save-dev eslint`

Files
-----

-   `package.json`
-   `babel.config.js`
-   `utils.js`  
    *Use when you get to tasks requiring `uploadPhoto` and `createUser`.*
-   `.eslintrc.js`
-   *Don’t forget to run `npm install` when you have the `package.json`*

Response Data Format
--------------------

`uploadPhoto` returns a response with the format:

```json
{
  status: 200,
  body: 'photo-profile-1',
}
```

`createUser` returns a response with the format:

```json
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

Tasks
-----

### 0. Keep every promise you make and only make promises you can keep

Return a Promise using this prototype `function getResponseFromAPI()`

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `0-promise.js`

### 1. Don't make a promise...if you know you can't keep it

Using the prototype `getFullResponseFromAPI(success)`, return a promise. The parameter is a boolean.

When the argument is:

-   `true`: resolve the promise by passing an object with:
    -   `status: 200`
    -   `body: 'Success'`
-   `false`: reject the promise with an error object with the message `The fake API is not working currently`

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `1-promise.js`

### 2. Catch me if you can!

Using the function prototype `function handleResponseFromAPI(promise)`, append three handlers to the function:

-   When the Promise resolves, return an object with:
    -   `status: 200`
    -   `body: 'success'`
-   When the Promise rejects, return an empty `Error` object
-   For every resolution, log `Got a response from the API` to the console

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `2-then.js`

### 3. Handle multiple successful promises

In this file, import `uploadPhoto` and `createUser` from `utils.js`.  
Knowing that the functions in `utils.js` return promises, use the prototype `function handleProfileSignup()` to collectively resolve all promises and log `body firstName lastName` to the console.  
In the event of an error, log `Signup system offline` to the console.

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `3-all.js`

### 4. Simple promise

Using the prototype `function signUpUser(firstName, lastName) {}` that returns a resolved promise with this object:

```json
{
  firstName: value,
  lastName: value,
}
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `4-user-promise.js`

### 5. Reject the promises

Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).  
The function should return a Promise rejecting with an `Error` and the string `$fileName cannot be processed`.

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `5-photo-reject.js`

### 6. Handle multiple promises

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.  
Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled, it should return an array with the following structure:

```json
[
  {
    status: status_of_the_promise,
    value: value or error returned by the Promise
  },
  ...
]
```

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `6-final-user.js`

### 7. Load balancer

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).  
The function should return the value returned by the promise that resolved first.

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `7-load_balancer.js`

### 8. Throw an error

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).  
When the `denominator` argument is equal to 0, the function should throw a new error with the message `cannot divide by 0`. Otherwise, it should return the `numerator` divided by the `denominator`.

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `8-try.js`

### 9. Throw error / try catch

Write a function named `guardrail` that will accept one argument `mathFunction` (Function).  
This function should create and return an array named `queue`.  
When the `mathFunction` function is executed, the value returned by the function should be appended to the `queue`. If this function throws an error, the error message should be appended to the `queue`. In every case, the message `Guardrail was processed` should be added to the `queue`.

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_promise`
-   File: `9-try.js`