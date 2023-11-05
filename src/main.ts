//let hello="world"; //here we can also provide the type of the variable explicitely
let hello : string ="world"
// hello=true //this is wrong , we can only reassign hello to string type npt boolean
//i.e the type in the variable should be consistent
hello = "world2";
const getFullName = (name,surname) => {
    return name + " " +surname;
}; 


//if we want to spcify type once, and use it everywhere, we can use interfaces
interface User {
    name: string;
    age?: number; //? here means age entity is not manditory
    //defining functions inside interfaces
    getMessage() : string;
}

//objects
const user: {name: string; age: number} = {
    name: "Riya",
    age:21,
};
//objects using interface
// const user10: User = {
//     name: "Riya",
//     getMessage(){
//         return "hello" + name;
//     }
// };


//console.log(user.getMessage());

//union - operator to combine data types
let pageName: string | number ="1";
//means initially we will be keeping the value as default i.e 1, and when we get the input then we will be deciding the datatype so in this case default value is 1 bt datatype can also be string

//any in typescript -> dont prefer using this
//never in typescript


let vAny : any = 10;
let vUnknown : unknown = 10;

let s1 : string = vAny;
//type assertion -> to convert it to other type
let s2 : string = vUnknown as string;;

//working with DOM
const someElement = document.querySelector(".foo") as HTMLInputElement;
//it is uper generic so we r defining html element
//typescript dosent know anythig about our markups, it only sees the datatypes

console.log("someElement", someElement.value);

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value);
})

//working with classes
class User {
    firstName : string
    lastName : string
    readonly unchangableName : string;

    constructor(firstName: string, lastName: string){
        this.firstName =  firstName;
        this.lastName =  lastName;
    }

    getFullname():  string{
        return this.firstName +' '+this.lastName;
    }
}
const user3 = new User("riya", "lessons");
console.log(user3)
//we also have public,private,protected

//inheritance 
class Admin extends User{
    private editor: string

    setEditor(editor:string): void{
        this.editor = editor
    }

    getEditor() : string{
        return this.editor
    }
}

//generics in typescripts
// <T> means that we can provide different data types
const addId = <T>(obj: T) => {
    const id = Math.random().toString(16);
    return{
        ...obj.
        id,
    };
};
interface UserInterface{
    name: string;
}
const user4 : UserInterface= {
    name: "jack"
}
const result = addId<UserInterface>(user4);
console.log("result",result)

//enums in typescripts
// const statuses = {
//     notStarted : 0,
//     InProgress: 1,
//     done : 2,
// };
enum Status {
    NotStarted,
    InProgress,
    Done,
}

let notStartedStatus : Status = Status.NotStarted;

console.log(Status.InProgress)
//benefits of enums -> we can use enums as datatypes
