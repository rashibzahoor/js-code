
//functions =>is a block of code which will be executed only when it called
//function is a reusable code
//function contains group of statements
//always invoke a function when it is completed





function greet(){
console.log("good morning")

}
greet()

//gunction with parameters
function mul(a,b){

    console.log(a*b)
}
mul(3,6)

function add(a,b=40){

    console.log(a+b)
}
add(10)
add(10,60)
add(10,10)


//function with return statements
function sum(a,b){

    return a+b
}
let s=sum(10,20)
console.log(s)
// before return statement anything we write it will executed but after return statement code will not be executed




