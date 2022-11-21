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
    //private variable
    var active=true;
    //getter method
    this.getActive=function(){
        return active;
    }


}
//create member function or method for the class
Customer.prototype.display=function(){
    return this.customerId+","+this.name;
}

var customer=new Customer(1,"Parameswari");
//method invocation
console.log(customer.display());
console.log(customer.getActive())


//method 4
//es5
class Member{
    constructor(memberId,name) {
//abstract class
        if(this.constructor === Member){
            throw new Error("Abstract class can't be instantiated")
        }

        this.memberId=memberId;
     this.name=name;

    }
    //abstract methods
    computeLoyaltyPoints(){
        throw new Error("Abstract method")

    }

    display(){
        console.log(this.memberId+","+this.name)
    }

}

var member=new Member(244,"Vignesh")
member.display();


//inheritance

class PlatinumMember extends Member{
    constructor(discount,offers,memberId,name) {
        super(memberId,name);
        this._discount = discount;
        this._offers = offers;
        this._memberId = memberId;
        this._name = name;

    }


    computeLoyaltyPoints() {
        console.log("overridden");
    }

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get offers() {
        return this._offers;
    }

    set offers(value) {
        this._offers = value;
    }

    get memberId() {
        return this._memberId;
    }

    set memberId(value) {
        this._memberId = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

//var member=new Member(1,"Param");

var platinumMember=new PlatinumMember(0.5,true,438998,"Shyam");

console.log(platinumMember.memberId);



