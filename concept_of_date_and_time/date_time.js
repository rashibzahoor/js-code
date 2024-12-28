//JavaScript Date objects represent a single moment in time in a platform-independent format.
 //Date objects encapsulate an integral number that represents milliseconds,
 // since the midnight at the beginning of January 1, 1970, UTC



 let myDate=new Date()
 console.log(myDate.toString())
 console.log(myDate.toLocaleString())
 console.log(myDate.toDateString())
 console.log(typeof(myDate))




 let newDate=new Date()
 console.log(newDate)
 console.log(newDate.getMonth()+1)
 console.log(newDate.getDay())
 console.log(newDate.getDay())
 console.log(newDate.getTime( ))
 console.log(`"now we see the year through date object":,${newDate.getFullYear()}`)
 console.log(`"now we see the day through date object":,${newDate.getDay()}`)
 
let mycreateddate=new Date(1999,8,15, 12,30)
let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(mycreateddate.toLocaleString())
console.log(mycreateddate.getTime())



