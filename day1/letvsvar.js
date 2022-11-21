//diff1
console.log(name);
var name; //variable hoisting

//console.log(id);
//let id; //it does not allow variable hoisting


//diff2

var active=true
var active=true

let accountNo=349756943
//let accountNo=399539 //redeclaration not permitted


//block scope

var array=[]

for(let i=0;i<100;i++)
{
    array.push((Math.random()*1000).toFixed(0))
}

array.forEach(x=>console.log(x))
