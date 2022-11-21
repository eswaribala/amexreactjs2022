//method 1

var obj=new Object();
obj.customerId=3875676;
obj.name="Parameswari"
console.log(obj)

//method 2
var customerObj={
    "customerId":39579347,
    "name":"Parameswari"
}

console.log(customerObj)

//method3
//parameterized constructor
function Customer(customerId,name){
    this.customerId=customerId;
    this.name=name
}
//create member function or method for the class
Customer.prototype.display=function(){
    return this.customerId+","+this.name;
}

var customer=new Customer(1,"Parameswari");
//method invocation
console.log(customer.display());





