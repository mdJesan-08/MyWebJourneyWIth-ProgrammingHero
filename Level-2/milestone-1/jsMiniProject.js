
let studnets = [
    {
        id : 101,
        name : "JEsan",
        age : 24,
        department : "EEE",
    },
    {
        id : 102,
        name : "Samrin",
        age : 20,
        department : "Pharmacy",

    }
];

console.log(studnets);
console.log(studnets.length);




function addNewStudent(name, age, department)
{
    newId = 101 + studnets.length;
    studnets.push({
        id : newId,
        name : name,
        age : age,
        department : department,

    })
};


addNewStudent("julu", 23, "toitoi");
// console.log(studnets);



let stock = false;

console.log(`${stock == false ? "Out of Stock" : "In Stock"}`);
