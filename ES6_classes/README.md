S6 Classes
==========

-   By Johann Kerbrat, Engineering Manager at Uber Works
-   Weight: 1
-   Your score will be updated as you progress.

!

Background Context
------------------

This project introduces you to ES6 classes, a powerful feature in JavaScript for implementing object-oriented programming (OOP). If you're new to classes or think you already know them, take this as an opportunity to dive deeper and experiment. Classes in JavaScript provide a cleaner syntax for creating objects and handling inheritance, but they come with nuances like hoisting, static methods, and metaprogramming that you'll explore here.

As always, type out the code (don’t copy-paste), test it, and play around with the examples to truly understand how classes work in ES6. The goal is to experiment and build intuition for OOP in JavaScript.

Read or watch the resources below in the order presented.

![ES6 Classes](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/817248fb77fb5c2cef3f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250419%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250419T044902Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=fe8da21e67d02b152796a55fef3489a43eeda59bada4c63fb52d673e87c87d42)

Resources
---------

**Read or watch**:

-   [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes "Classes")
-   [Metaprogramming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming "Metaprogramming")
-   [JavaScript ES6 Classes](https://www.youtube.com/watch?v=T-H4nRV2rzo "JavaScript ES6 Classes")
-   [ES6 Classes and Inheritance](https://javascript.info/class "ES6 Classes and Inheritance")
-   [Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol "Symbols")
-   [Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static "Static Methods")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-technique/ "explain to anyone"), **without the help of Google**:

### General

-   Why JavaScript programming is awesome
-   How to define a class in ES6
-   How to add methods to a class
-   Why and how to add a static method to a class
-   How to extend a class from another (inheritance)
-   What is metaprogramming and how to use it in JavaScript
-   What are Symbols in ES6 and how to use them
-   How to implement getters and setters in a class
-   How to override methods in a subclass
-   How to use hoisting with ES6 classes
-   How to customize object casting (e.g., to Number or String)

Requirements
------------

### General

-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using Node.js (version 20.x.x) and npm (version 9.x.x)
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `.js` extension
-   Your code will be tested using Jest with the command `npm run test`
-   Your code will be verified against lint using ESLint with the command `npm run lint`
-   Your code needs to pass all tests and lint checks. You can verify the entire project by running `npm run full-test`
-   All your classes and methods should have appropriate documentation (use JSDoc comments)
-   Documentation should be a complete sentence explaining the purpose of the class or method

Setup
-----

### Install NodeJS 20.x.x
(in your home directory):

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:
```bash
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
```

### Install Jest, Babel, and ESLint
In your project directory:

-   Install Jest: `npm install --save-dev jest`
-   Install Babel: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
-   Install ESLint: `npm install --save-dev eslint`

### Configuration Files
Ensure the following configuration files are set up in your project directory:

-   `package.json`
-   `babel.config.js`
-   `.eslintrc.js`

Run `npm install` after setting up `package.json` to install dependencies.

More Info
---------

**Documentation is mandatory!** Each class and method must include JSDoc comments explaining their purpose. Follow best practices for clean, maintainable code. Refer to [JSDoc Documentation](https://jsdoc.app/ "JSDoc Documentation") for guidance on writing documentation.

Tasks
-----

### 0. You used to attend a place like this at some point

**mandatory**

Implement a class `ClassRoom`:

-   Prototype: `export default class ClassRoom`
-   It should accept one attribute named `maxStudentsSize` (Number) and assign it to `_maxStudentsSize`

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `0-classroom.js`

### 1. Let's make some classrooms

**mandatory**

Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `1-make_classrooms.js`

### 2. A Course, Getters, and Setters

**mandatory**

Implement a class named `HolbertonCourse`:

-   Constructor attributes: `name` (String), `length` (Number), `students` (array of Strings)
-   Verify the type of attributes during object creation
-   Store attributes in underscore versions (e.g., `name` in `_name`)
-   Implement a getter and setter for each attribute

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `2-hbtn_course.js`

### 3. Methods, static methods, computed method names... MONEY

**mandatory**

Implement a class named `Currency`:

-   Constructor attributes: `code` (String), `name` (String)
-   Store attributes in underscore versions (e.g., `name` in `_name`)
-   Implement a getter and setter for each attribute
-   Implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `3-currency.js`

### 4. Pricing

**mandatory**

Import the `Currency` class from `3-currency.js`.

Implement a class named `Pricing`:

-   Constructor attributes: `amount` (Number), `currency` (Currency)
-   Store attributes in underscore versions (e.g., `amount` in `_amount`)
-   Implement a getter and setter for each attribute
-   Implement a method named `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`
-   Implement a static method named `convertPrice` that accepts `amount` (Number) and `conversionRate` (Number) and returns the amount multiplied by the conversion rate

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `4-pricing.js`

### 5. A Building

**mandatory**

Implement a class named `Building`:

-   Constructor attribute: `sqft` (Number)
-   Store attribute in underscore version (e.g., `sqft` in `_sqft`)
-   Implement a getter for the attribute
-   Make the class abstract by ensuring any class that extends it must implement a method named `evacuationWarningMessage`. Throw an error with the message `Class extending Building must override evacuationWarningMessage` if not implemented

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `5-building.js`

### 6. Inheritance

**mandatory**

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends `Building`:

-   Constructor attributes: `sqft` (Number), `floors` (Number)
-   Store attributes in underscore versions (e.g., `floors` in `_floors`)
-   Implement a getter for each attribute
-   Override the `evacuationWarningMessage` method to return the string `Evacuate slowly the NUMBER_OF_FLOORS floors`

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `6-sky_high.js`

### 7. Airport

**mandatory**

Implement a class named `Airport`:

-   Constructor attributes: `name` (String), `code` (String)
-   Store attributes in underscore versions (e.g., `name` in `_name`)
-   The default string description of the class should return the airport `code`

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `7-airport.js`

### 8. Primitive - Holberton Class

**mandatory**

Implement a class named `HolbertonClass`:

-   Constructor attributes: `size` (Number), `location` (String)
-   Store attributes in underscore versions (e.g., `size` in `_size`)
-   When cast to a Number, it should return the `size`
-   When cast to a String, it should return the `location`

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `8-hbtn_class.js`

### 9. Hoisting

**mandatory**

Fix the provided code to handle hoisting issues and make it work. Implement `HolbertonClass`, `StudentHolberton`, and `listOfStudents` to correctly manage student data and descriptions.

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `9-hoisting.js`

### 10. Vroom

**mandatory**

Implement a class named `Car`:

-   Constructor attributes: `brand` (String), `motor` (String), `color` (String)
-   Store attributes in underscore versions (e.g., `brand` in `_brand`)
-   Add a method named `cloneCar` that returns a new object of the same class
-   Hint: Use Symbols in ES6 for proper cloning

**Repo:**

-   GitHub repository: `holbertonschool-web_back_end`
-   Directory: `ES6_classes`
-   File: `10-car.js`
