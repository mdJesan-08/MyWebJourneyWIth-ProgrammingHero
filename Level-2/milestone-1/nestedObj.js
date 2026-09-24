let user = 
{
    name : "Samrin",
    age : 20,
    address :
    {
        District : "Patuakhali",
        Thana : "Kalayia",
    },
};


// console.log(user);



// console.log(user.address.Thana);


let entries = Object.entries(user);
const keys = Object.keys(user);

// console.log(entries);
// console.log(keys);

for (let i = 0; i < 5; i++) {
    console.log(`count : ${i}`);
    
}