function getUserData(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
reject("user data fetched successfully")

        },3000)
    })


}

async function userData() {
   try{
    console.log("fetched data")
     const data= await getUserData()
     console.log(data)
     
   }
   catch(error){
console.log("error fetched successfully")
   }
}


userData()