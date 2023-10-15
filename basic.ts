//Premitive DataType
//String
let nameStr: string;
nameStr = 'Balaji';
//Number
let age: number;
age = 39;
//Boolean
let isMale: boolean;
isMale = true;


//Complext DataType
//Array of String
let names: string[];
names = ['Balaji', 'Kamala', 'Vasuki', 'Yashika'];

//Custom Object
//Declaration
let person: {
    nameStr: String;
    age: number;
};
//Initialization
person = {
    nameStr: 'Yashika',
    age: 7
};

//Assignment in singleline
let simpleString : string = 'Value';

//Assigning Multiple datatype to a single variable called : Union
let simpleUnion : string | number = 'Value';
simpleUnion = 32;


//Assignment Type Aliases
//Type
type Customer = {
    id: number,
    customerName: String,
    customerAddress: String
};
//Declaration
let custObj: Customer;
//Initializaion
custObj = {
    id: 1,
    customerName: 'Balaji',
    customerAddress: 'Concord'
};

//Type Array
let custObjs: Customer[];
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
function add(a: number, b: number){
    return a + b;
}

//With return type data declaration
function add(a: number, b: number): number{
    return a + b;
}


//With return type data declaration
function add(a: number, b: number): number | string{
    return a + b;
}

//void return
function logger(value: any) : void{
    console.log(value);
}

//Generics
function addElementAtBeginning <T>(originalArray : T[], valuetoInsert: T){
    const updatedArray = [valuetoInsert, ... originalArray];
    return updatedArray;
}

//Calling the above method with value integer
const integerArray = addElementAtBeginning([1,2,3,4], 0);
const stringArray = addElementAtBeginning(['Balaji', 'Kamala', 'Valuki'], 'Yashika');
stringArray[0].split('a');

//Class declaration, Constructor, class object creation and accessing the method
class Student{
    id : number;
    name: string;
    dob: Date;
    subjects: string[];

    constructor(id: number, name: string, dob: Date, subjects: string[]){
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.subjects = subjects;
    }

    addSubject(subject: string){
        this.subjects.push(subject);
    }
}

const student = new Student(1, 'Balaji', new Date(), ['Tamil']);
student.addSubject('English');

// Interface and implementaion
interface Human{
    firstName: string;
    lastName: string;
    greet: () => void;
}

let mark: Human;
mark = {
    firstName: 'Mark',
    lastName: 'Antony',
    greet(){
        console.log('Hello!');
    },
};

let balaji: Human;
balaji = {
    firstName: 'Balaji',
    lastName: 'Soundarrajan',
    greet(){
        console.log('Vanakkam!');
    },
};

class SuperHuman implements Human{
    firstName: string;
    lastName: string;
    greet(){
        console.log('How every one doing at home?');
    }
    age : number; 
}