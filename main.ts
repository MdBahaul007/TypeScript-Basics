export {}
let message="Hello World again";
console.log(message); 

// Assingning type to variable

let isBegineer:boolean =true;
let total:number=0;
let name:string= 'MBM';

// we can also decalre array of values 
let list1: number[] = [1,2,3];
//another sytax
let list2:Array<number>=[1,2,3];

// to declare mixed type
 let list3:[string,number] = ["mbm",12]; //we cannot inerchage values.

 // if we are unsure of what is var type than use any

let randomValue :any = 10;
randomValue=true;
randomValue="MBM";
randomValue=12;



// Type Inference.

let a;
a=10;
a=true;
// this thing is acceptable

//We can decalre a single varibale to multui data type using | fn thsi is called union.

let multitype : number | boolean;
multitype=20;
multitype=true;

//both will work

// type any has no restriction. where as type union has no restriction

// Function in TS.

function add(num1 ,num2){
    return num1+num2;
}
//or we can also declare function as
function add1(num1:number,num2:number){
    return num1+num2;
}
add1(5,10);
//add1(5,"10") will give error
//add1() //empty will also give an error.


// if we have possiblity that num2 is optional than we can use ? i,e

function add2(num1:number,num2 ? :number){
    return num1+num2;
}
add2(5); //now it will not show an error //here num2 will be treayed as umdefined.//so will return 5

//we can have any number of optional parametres condition is optional para should be after req para.
//suppose iof we want num1 as optional parametre than it should be after num2, num2 should come first.

// these are called optional parameters.


//We also have default parameteres.->they have set value
//for ex

function add3(num1:number,num2 :number=10){
    return num1+num2;
}
add2(5,10);//it will return 15
//add2(5);// here alos iot will take give 15 bcz it will take 10 from above.



//Interfaces.
//let create fn which has object type

function fullName(person){
    firstName:String;
    lastName:String;
    console.log(`${person.firstName},${person.lastName}`);
    
}
let p={
    firstName:"Mohd",
    lastName:"Bahul"
};

fullName(p); 
//output will coem as ususl.

// If object has large number of properties than it will be difficult. to do like this
//so iterface come into play

interface Person{
    firstName:String;
    lastName?:String; //? for optional property if want
    //optional situation is while filling the form.
}
function fullName1(person:Person){
console.log(`${person.firstName},${person.lastName}`);
}
    
let p1={
    firstName:"Mohd",
    lastName:"Bahul"
};

fullName1(p1);





// Acees modifiers

//creating class in TS>

class Empolyee{
    employeeName:String;
    // cons to intilize the employee name
    constructor(name:String){
        this.employeeName=name;

    } 
    greet(){
        console.log(`Good Morning $(this.employeeName)`);

}
}

//craeting instance of this empoyee class
 let emp1=new Empolyee("MBM");
 //we can log name and call greet method.

 console.log(emp1.employeeName);
 emp1.greet();

 //create manager class just  by inheriting from above
 // for inheritance we use extends keyword.

 class Manager extends Empolyee{
     // this derive class has also constructor
     // cons has to accept name parametre
     constructor(managerName: string){
         super(managerName);  // super class is calling base class constructor so manager name get initlizee in employee name.

     }
    //
    welcome(){
        console.log(`WElcome manager`);
}
 }
 let m1=new Manager("bob");
 m1.welcome();
 //we havwe acces to empoyee methods
 m1.greet() //as greet is in empoyee
 console.log(m1.employeeName);// output welcomee bob.
 




