"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World again";
console.log(message);
// Assingning type to variable
var isBegineer = true;
var total = 0;
var name = 'MBM';
// we can also decalre array of values 
var list1 = [1, 2, 3];
//another sytax
var list2 = [1, 2, 3];
// to declare mixed type
var list3 = ["mbm", 12]; //we cannot inerchage values.
// if we are unsure of what is var type than use any
var randomValue = 10;
randomValue = true;
randomValue = "MBM";
randomValue = 12;
// Type Inference.
var a;
a = 10;
a = true;
// this thing is acceptable
//We can decalre a single varibale to multui data type using | fn thsi is called union.
var multitype;
multitype = 20;
multitype = true;
//both will work
// type any has no restriction. where as type union has no restriction
// Function in TS.
function add(num1, num2) {
    return num1 + num2;
}
//or we can also declare function as
function add1(num1, num2) {
    return num1 + num2;
}
add1(5, 10);
//add1(5,"10") will give error
//add1() //empty will also give an error.
// if we have possiblity that num2 is optional than we can use ? i,e
function add2(num1, num2) {
    return num1 + num2;
}
add2(5); //now it will not show an error //here num2 will be treayed as umdefined.//so will return 5
//we can have any number of optional parametres condition is optional para should be after req para.
//suppose iof we want num1 as optional parametre than it should be after num2, num2 should come first.
// these are called optional parameters.
//We also have default parameteres.->they have set value
//for ex
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add2(5, 10); //it will return 15
//add2(5);// here alos iot will take give 15 bcz it will take 10 from above.
//Interfaces.
//let create fn which has object type
function fullName(person) {
    firstName: String;
    lastName: String;
    console.log(person.firstName + "," + person.lastName);
}
var p = {
    firstName: "Mohd",
    lastName: "Bahul"
};
fullName(p);
function fullName1(person) {
    console.log(person.firstName + "," + person.lastName);
}
var p1 = {
    firstName: "Mohd",
    lastName: "Bahul"
};
fullName1(p1);
// Acees modifiers
//creating class in TS>
var Empolyee = /** @class */ (function () {
    // cons to intilize the employee name
    function Empolyee(name) {
        this.employeeName = name;
    }
    Empolyee.prototype.greet = function () {
        console.log("Good Morning $(this.employeeName)");
    };
    return Empolyee;
}());
//craeting instance of this empoyee class
var emp1 = new Empolyee("MBM");
//we can log name and call greet method.
console.log(emp1.employeeName);
emp1.greet();
//create manager class just  by inheriting from above
// for inheritance we use extends keyword.
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    // this derive class has also constructor
    // cons has to accept name parametre
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    //
    Manager.prototype.welcome = function () {
        console.log("WElcome manager");
    };
    return Manager;
}(Empolyee));
var m1 = new Manager("bob");
m1.welcome();
//we havwe acces to empoyee methods
m1.greet(); //as greet is in empoyee
console.log(m1.employeeName); // output welcomee bob.
