let student = 
{
    name: "Samrin",
    ages: 24,
    email: "test@gmail.com",
}


function objVal(obj)
{
    for(let key in student)
    {
        console.log(key,":", student[key]);
        
    }

}

// objVal(student);

// let {name, ages} = student;
// console.log(name);



// Copy by reference
let students2 = student;
students2.newKey = "newValue";
console.log("students2 (reference):", students2);
console.log("student (after reference copy):", student);

console.log("---------copy by reference--------");

// Copy with spread operator (shallow copy)
let student3 = { ...student };
student3.email = "changed@email.com";
student3.anotherKey = 42;
console.log("student3 (spread copy):", student3);
console.log("student (after spread copy):", student);
console.log(student);

let { name } = student;

// console.log(amr_name);
// amr_name = "hasan";

console.log(name);
name = "jesan"
console.log(student.name);



