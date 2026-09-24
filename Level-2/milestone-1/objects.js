let user = {
    name : "samrin",
    age : 20,
    childern : 1,
};

console.log(user);
console.log(user["name"]);

for(key in user)
{
    console.log(key + " : " + user[`${key}`]);
}