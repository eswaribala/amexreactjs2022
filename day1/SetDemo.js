//set of loan accounts

var loanSet=new Set();

for(let i=0;i<5;i++){
    loanSet.add((Math.random()*100000).toFixed(0))
}
//loan Set
console.log("Loan Set...........")
loanSet.forEach(x=>console.log(x));

var fdSet=new Set();

for(let i=0;i<5;i++){
    fdSet.add((Math.random()*100000).toFixed(0))
}

console.log("FD Set...........")
fdSet.forEach(x=>console.log(x));


//union
var loanFDSet=new Set([...loanSet,...fdSet])

console.log("Loan and FD Set...........")
loanFDSet.forEach(x=>console.log(x));


//intersection

var accountHolders=new Set(["Param","Vignesh","Ilakiya"]);
var dematHolders=new Set(["Bala","Vignesh","Anitha"]);

var commonCustomers=new Set([...accountHolders].filter(x=>dematHolders.has(x))
);
console.log("Common Customers...........")
commonCustomers.forEach(x=>console.log(x));


