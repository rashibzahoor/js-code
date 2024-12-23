function fetchData(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
let success=true
if(success){
    resolve("fetched data")
}else{
    reject("data not fetched")
}


},4000)

    })
}

fetchData()
.then((data)=>{
    console.log(data)
    return data.toUpperCase()
})
.then((value)=>{

console.log(value);

})

.catch((error)=>{
    console.log(error)
})