// rest operator is used to copy the current array values into another array,
// this can be denoted with "..."

let sizes=[30,32,34,36]
let clothes=["nike","H&M","converse","zara"]

let newsizes=[...sizes,...clothes]
console.log(newsizes)