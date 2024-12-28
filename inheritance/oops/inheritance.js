 // inheritance=>accessing methods and properties  from the parent class
 // to inherit properties we use "extends" keyword
 class Account {
    acc_id;
    acc_name;
    acc_Bal;
  
    constructor(id, name) {
      console.log("My Parent Class Constructor");
      this.acc_id = id;
      this.acc_name = name;
    }
  }
  
  class Savings extends Account {
    constructor(id, name, bal) {
      super(id, name);
      console.log("Child Class Constructor");
      this.acc_Bal = bal;
    }
  
    getbal() {
      console.log("My Get Balance Method");
      return this.acc_Bal;
    }
  }
  
  let s1 = new Savings(101, "Aparna", 150000);
  s1.getbal();
  console.log(s1);