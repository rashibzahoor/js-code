// filter method


let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newnums = number.filter((num) => {
    return num > 5
})
console.log(newnums)

// for each method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newnum = []
numbers.forEach((num) => {

    if (num > 4) {
        newnum.push(num)
    }
})
console.log(newnum);


let books = [
    {title: "book1", genre: "fiction", publish: 1990},
    {title: "book2", genre: "non_fiction", publish: 1991},
    {title: "book3", genre: "science", publish: 1992},
    {title: "book4", genre: "science", publish: 1993},
    {title: "book5", genre: "fiction", publish: 1994}
]


// let userbooks=books.filter((bk)=>bk.genre==='fiction')
// console.log(userbooks);


// let userbooks=books.filter((bk)=>bk.publish===1994)
// console.log(userbooks);
let newbooks=[]
books.forEach((bk)=>{

if(bk.genre==="fiction"){
newbooks.push(bk)
}
})
console.log(newbooks)



let mathnumbers=[1,2,3,4,5,6,7,8,9]

let mathnum=mathnumbers.map((num)=>{

return num +10
})

console.log(mathnum)


// map method and chaining

let nums=[1,2,3,4,5,6,7,8,9]

let newmath=nums.map((num)=>{
return num*10
})
.map((num)=>{
    return num +5
})
.filter((num)=>{
    return num >30
})
console.log(newmath);
