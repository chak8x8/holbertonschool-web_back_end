# ES6 Basics
========================================

- Novice
- By: Johann Kerbrat, Engineering Manager at Uber Works
- Weight: 1
- Your score will be updated as you progress.

## Description
-----------

For this project, we expect you to look at this concept:

- **Software Linter**

---

## Resources
---------

Read or watch:

- [ECMAScript 6 - ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

---

## Learning Objectives
-------------------

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

---

## Requirements
-------------

### General
- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 9.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the [Jest Testing Framework](https://jestjs.io/)
- Your code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
- All of your functions must be exported

---

## Setup
------

### Install NodeJS 20.x.x
(in your home directory):

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```bash
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
```

### Install Jest, Babel, and ESLint
in your project directory:

- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint using: `npm install --save-dev eslint`

---

## Configuration Files
-------------------

Please create the following 3 files (with the provided contents) in the project directory:

### package.json
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "babel-jest": "^24.9.0",
    "eslint": "^6.4.0",
    "jest": "^24.9.0"
  }
}
```

### babel.config.js
```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
```

### .eslintrc.js
```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement'
    ]
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js'
    }
  ]
};
```

### Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies. Do not push on your repository the folder `node_modules` that has been created.

---

## Tasks
-----

### 0. Const or let?
**mandatory**

Modify

- `function taskFirst` to instantiate variables using `const`
- `function taskNext` to instantiate variables using `let`

**File**: `0-constants.js`

```javascript
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
```

**Execution example**:

```bash
bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$ 
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `0-constants.js`

**0/5 pts**

---

### 1. Block Scope
**mandatory**

Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.

**File**: `1-block-scoped.js`

```javascript
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
```

**Execution**:

```bash
bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `1-block-scoped.js`

**0/3 pts**

---

### 2. Arrow functions
**mandatory**

Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after).

**File**: `2-arrow.js`

```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
```

**Execution**:

```bash
bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `2-arrow.js`

**0/3 pts**

---

### 3. Parameter defaults
**mandatory**

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

**File**: `3-default-parameter.js`

```javascript
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
```

**Execution**:

```bash
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `3-default-parameter.js`

**0/5 pts**

---

### 4. Rest parameter syntax for functions
**mandatory**

Modify the following function to return the number of arguments passed to it using the rest parameter syntax.

**File**: `4-rest-parameter.js`

```javascript
export default function returnHowManyArguments(...args) {
  return args.length;
}
```

**Execution**:

```bash
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `4-rest-parameter.js`

**0/3 pts**

---

### 5. The wonders of spread syntax
**mandatory**

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

**File**: `5-spread-operator.js`

```javascript
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
```

**Execution**:

```bash
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `5-spread-operator.js`

**0/3 pts**

---

### 6. Take advantage of template literals
**mandatory**

Rewrite the return statement to use a template literal so you can substitute the variables you’ve defined.

**File**: `6-string-interpolation.js`

```javascript
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
```

**Execution**:

```bash
bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `6-string-interpolation.js`

**0/3 pts**

---

### 7. Object property value shorthand syntax
**mandatory**

Modify the following function’s budget object to simply use the object property value shorthand syntax.

**File**: `7-getBudgetObject.js`

```javascript
export default function getBudgetObject(income, gdp, capita) {
  return { income, gdp, capita };
}
```

**Execution**:

```bash
bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `7-getBudgetObject.js`

**0/3 pts**

---

### 8. No need to create empty objects before adding in properties
**mandatory**

Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the budget object.

**File**: `8-getBudgetCurrentYear.js`

```javascript
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
```

**Execution**:

```bash
bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `8-getBudgetCurrentYear.js`

**0/3 pts**

---

### 9. ES6 method properties
**mandatory**

Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object.

**File**: `9-getFullBudget.js`

```javascript
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
```

**Execution**:

```bash
bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js 
$20
20 euros
bob@dylan:~$
```

**Repo**:
- GitHub repository: `holbertonschool-web_back_end`
- Directory: `ES6_basic`
- File: `9-getFullBudget.js
