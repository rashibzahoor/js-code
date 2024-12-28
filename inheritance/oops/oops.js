// Object-oriented programming (OOP) in JavaScript is a programming model
//  that uses objects and classes to model systems and design software

// const user={

// username:"rashib",
// login:30,
// email:"test@test.com",
// getDetails:function(){
// }
// } 
// console.log(this)




// function User(username,email,number){
// this.username=username
// this.email=email
// this.number=number
// // return this
// }

// const userone= new User("rashib","test@gmail.com",8825047306)
// const userone1=User("rocko","test1@gmail.com",8825047306)

// console.log(userone)


//constructor

// class user{
//     constructor(username,password,email){
//         this.username=username
//         this.password=password
//         this.email=email
//     }
//         encryptedPassword(){
//             return `${this.password},rocko`

// }

//                 changeusername(){
//                     return `${this.username}umair`
//                 }
// }
// const rashib=  new user("rashib",1234,"rashib@yahoo.com")
// console.log(rashib)
//     console.log(rashib. encryptedPassword());

class user{

constructor(username){
this.username=username
}
logme(){

    console.log(`username is :${this.username}`)
}

}
 class teacher extends user{
constructor(username,email,password){
    super(username)
        this.email=email
        this.password=password

}

    addcourse(){
        console.log(`new course was added:${this.username}`)
    }
 }

 const rashib=new user("umair")
 const umair=new teacher("umair","umair@gmail.com",12345)
umair.addcourse()