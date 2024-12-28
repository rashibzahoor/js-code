// spread operator is used to copy the current object values into the new objects ,
// this can be denoted with ("...")


let emp={id:101,name:"rashib"}
let getdetails={email:"rashibzahoor",location:"kashmir,sopore,iqbal nagar"}


let emp1={...emp,...getdetails}
console.log(emp1)


