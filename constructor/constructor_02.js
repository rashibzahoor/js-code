class Account {
    acc_id;
    acc_name;
    acc_Bal;
    min_Bal = 1000;
  
    constructor(id, name, bal) {
      console.log("My Constructor Method");
      this.acc_id = id;
      this.acc_name = name;
      this.acc_Bal = bal;
    }
  
    getbal() {
      console.log("My Get Balance Method");
      return this.acc_Bal + this.min_Bal;
    }
  }
  
  let a1 = new Account(101, "aparna", 150000);
  console.log(a1.getbal());