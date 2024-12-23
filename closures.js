function outer(){

    let counter=Symbol
    return function(){
        counter++
        return counter
    }
}

let increment=outer()
console.log(increment())