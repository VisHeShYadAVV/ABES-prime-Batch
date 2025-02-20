const data = [
    {name:"Anuj", city:"Delhi", email : "anuj@abes.edu"},
    {name:"Dhruv", city:"Etha", email : "dhuv@abes.edu"},
    {name:"Vishesh", city:"Aulada", email : "vishesh@abes.edu"},
    {name:"Mavi", city:"Raj Nagar", email : "mavi@abes.edu"}
];

const root = document.getElementById("parent");

data.forEach((elem)=>{
    const ncard = document.createElement("div");
    ncard.className = "card";
    ncard.innerHTML = `
    <h4> ${elem.name}</h4>
    <h6> ${elem.city}</h6>
    <p> ${elem.email}</p>
    `
    root.appendChild(ncard);
});