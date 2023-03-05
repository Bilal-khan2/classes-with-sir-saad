// let a = new Promise((res,rej)=>{
//  let treat= new Date();
//   let date=treat.getDate()


//  if (date === 5)
//  {
//     res("Hammad nae treat dae de")
//  }
//  else{
//     rej("Hammad nae topi kerwa dae")
//  }

// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error);
// })



// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let even = [];
// let odd = [];


// arr.map((element) => {
//     if (arr[element] % 2 == 0) {
//         even.push(element)
//     }
//     else{
//         odd.push(element)
//     }

// })

// console.log("Array:-", arr)
// console.log("Even:-", even)
// console.log("Odd: -", odd)


let palandrom=(string)=>{
    let value1= string.split('');
    let  rev = value1.reverse();
    let check = rev.join('');
    if (check === string)
    {
        console.log("is palandrom")
    }
    else
    {
        console.log("is not palandrom")
    }


}
let nam = prompt("enter to check")
palandrom(nam);
