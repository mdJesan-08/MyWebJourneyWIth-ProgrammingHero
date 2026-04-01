// function expression

const add = function (a, b) {
    return a + b;
}

const result = add(5, 3);
console.log(result);

const multiply = (a,b) => a * b;

const result2 = multiply(4, 6);
console.log(result2);


const square = x => x * x;

const result3 = square(5);
console.log(result3);

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const fullName = getFullName("John", "Doe");
console.log(fullName);
