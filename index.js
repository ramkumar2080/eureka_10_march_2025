console.log("hello world");
console.log("i like pizaa");

let id = 33;
let myname = "ram";

console.log(`the myid  is: ${id}`);
console.log(typeof id);
console.log(`my name is : ${myname}`);
console.log(typeof myname );

//document.getElementById("p1").textContent =`my id is ${id}`;
//document.getElementById("p2").textContent = `my name is ${myname}`;

let a =3;
let b = 4;
let c = a+b;

console.log(`the sum of two numbers ${c}`);

let username;

//document.getElementById('mysubmit').onclick = function(){
  //  username = document.getElementById(`myText`).value;
//document.getElementById(`myh1`).textContent = `hello ${username}`;
//}

//let Age;

//Age = window.prompt(`how old are you`);
//console.log(`my age is ${Age}`);

const decreaseBTN = document.getElementById(`decreaseBTN`); 
const restBTN = document.getElementById(`restBTN`); 
const increaseBTN = document.getElementById(`increaseBTN`); 
const countlable = document.getElementById(`countlable`);
let count = 0;

increaseBTN.onclick = function(){
    count++;
    countlable.textContent = count;
}
decreaseBTN.onclick = function(){
    count--;
    countlable.textContent = count;
}
restBTN.onclick = function(){
    count = 0;
    countlable.textContent = count;
}