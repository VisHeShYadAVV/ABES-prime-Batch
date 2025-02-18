//two separate functions
// const sum = (a,b,c) =>{
//     const ans=a*b;
//     c(ans);
// }

// const printPretty = (txt) =>{
//     console.log("---------");
//     console.log(txt);
//     console.log("---------");
// };

// sum(7,7,printPretty);

const getMetaData = () => {
    const name = prompt("Enter your name");
    console.log(name);
    const subject = parseInt(prompt("Enter the number of subjects"));
    return subject;
}

const getSubject = (num) => {
    const record = {};  // Using an object instead of an array
    for (let i = 0; i < num; i++) {  // Fixed the variable name
        const subName = prompt("Enter your subject");
        const marks = parseInt(prompt("Enter marks of subject")); // Convert to number
        record[subName] = marks;
    }
    console.log(record);
}

let n = getMetaData();
getSubject(n);
