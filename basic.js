"use strict";
//Premitive DataType
//String
let nameStr;
nameStr = 'Balaji';
//Number
let age;
age = 39;
//Boolean
let isMale;
isMale = true;
//Complext DataType
//Array of String
let names;
names = ['Balaji', 'Kamala', 'Vasuki', 'Yashika'];
//Custom Object
//Declaration
let person;
//Initialization
person = {
    nameStr: 'Yashika',
    age: 7
};
//Assignment in singleline
let simpleString = 'Value';
//Assigning Multiple datatype to a single variable called : Union
let simpleUnion = 'Value';
simpleUnion = 32;
//Declaration
let custObj;
//Initializaion
custObj = {
    id: 1,
    customerName: 'Balaji',
    customerAddress: 'Concord'
};
//Type Array
let custObjs;
//Initialization
custObjs = [
    {
        id: 1,
        customerName: 'Balaji',
        customerAddress: 'Concord'
    },
    {
        id: 1,
        customerName: 'Balaji',
        customerAddress: 'Concord'
    }
];
//Functions & Types
//Regular
function add(a, b) {
    return a + b;
}
//With return type data declaration
function add(a, b) {
    return a + b;
}
//With return type data declaration
function add(a, b) {
    return a + b;
}
//void return
function logger(value) {
    console.log(value);
}
//Generics
function addElementAtBeginning(originalArray, valuetoInsert) {
    const updatedArray = [valuetoInsert, ...originalArray];
    return updatedArray;
}
//Calling the above method with value integer
const integerArray = addElementAtBeginning([1, 2, 3, 4], 0);
const stringArray = addElementAtBeginning(['Balaji', 'Kamala', 'Valuki'], 'Yashika');
stringArray[0].split('a');
//Class declaration, Constructor, class object creation and accessing the method
class Student {
    constructor(id, name, dob, subjects) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.subjects = subjects;
    }
    addSubject(subject) {
        this.subjects.push(subject);
    }
}
const student = new Student(1, 'Balaji', new Date(), ['Tamil']);
student.addSubject('English');
let mark;
mark = {
    firstName: 'Mark',
    lastName: 'Antony',
    greet() {
        console.log('Hello!');
    },
};
let balaji;
balaji = {
    firstName: 'Balaji',
    lastName: 'Soundarrajan',
    greet() {
        console.log('Vanakkam!');
    },
};
class SuperHuman {
    greet() {
        console.log('How every one doing at home?');
    }
}
