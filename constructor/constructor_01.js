// constructor =>it is a default method which is availaible in class 
// constructor does not require an object to execute the method 
// constructor will be executed automatically as soon as the object is created for the  
// class;
//                 to override constructor method we use "super" keyword



class Arrow {
    constructor() {
      console.log("My Constructor");
    }
  
    bow() {
      console.log("Custom Method");
    }
  }
  
  let ar = new Arrow();
  ar.bow();