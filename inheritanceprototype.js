function Person(name){
this.name=name

}

Person.prototype.greet=function(){
console.log(`hello my name is ${this.name}`)

}


let rashib=new Person("rashib")
rashib.greet()
