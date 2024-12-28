// // it is a blue print template for creating an object
// // class contains properties and methods
 
class Account {

    accBal;
    min_Bal=1000;

    openAccount(){
        return "Your Account Opened Successfully";
    }

    deposit(amount){
        //This keyword is used to refer the current object
       return this.accBal = this.min_Bal + amount;
    }

    getbal(){
        return this.accBal;
    }

    withdraw(amount){
        return this.accBal - amount;
    }

}

//To create an object for class, we need to use "new" keyword

let a1 = new Account();
let open = a1.openAccount();
console.log(open);
console.log(a1.deposit(4000));
console.log(a1.getbal());
console.log(a1.withdraw(2000));