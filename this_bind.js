let person={

    name:"rashib",
    greet() {
console.log(`hi i am ${this.name}`)

    }


}


person.greet()



let rashib=person.greet.bind({name:"faisal"})
rashib()