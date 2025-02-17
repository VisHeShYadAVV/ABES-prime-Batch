// const view = function (a){
//     console.log("Hi" ,a);
// }

// view("Vishesh");

// function suma(a,b){
//     console.log((a+b)%10);
// }
// suma(3,4);


const sum = (a,b) => {
    return ((a+b)%10);
}

console.log(sum(3,4));

let a=[5];
for(let i=0;i<5;i++){
     a[i]=prompt(`Enter the marks of subject ${i+1} subject`);
}
let total=0;
for(let i of a){
    total+=parseInt(i);
}
console.log(total/5
);