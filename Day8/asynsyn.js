// console.log("start")

// const handleInnerCall = () =>{
//     console.log("step Y")
// }

// const handleCall = () =>{
//     console.log("step H");

//     handleInnerCall();

//     console.log("step N");
// }

// handleCall();

// console.log("end")

// --------------------------------------------------------

// console.log("start")

// const handleInnerCall = () =>{
//     console.log("step Y")
// }

// const handleCall = () =>{
//     console.log("step H");

//     handleInnerCall();
//     console.log("step N");
// }

// document.querySelector("body").addEventListener("click", handleCall);

// console.log("end")

// SET timeout

console.log("start")

const handleInnerCall = () =>{
    console.log("step Y");
}

const handleCall = () =>{
    console.log("step H");
    handleInnerCall();
    console.log("step N");
}

setTimeout(handleCall, 1000);
console.log("end");