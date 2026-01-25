// ============================================
// MASTERING JAVASCRIPT ARRAY METHODS
// ============================================

// ============================================
// 1. CREATING ARRAYS & BASIC ACCESS
// ============================================

// Creating arrays
var fruits = ['apple', 'banana', 'orange', 'mango'];
var numbers = [10, 20, 30, 40, 50];
var mixed = [1, 'hello', true, null];

console.log('--- Creating Arrays ---');
console.log('Fruits:', fruits);
console.log('Numbers:', numbers);
console.log('Mixed:', mixed);

// Accessing elements (index starts at 0)
console.log('\n--- Accessing Elements ---');
console.log('First fruit:', fruits[0]); // apple
console.log('Third fruit:', fruits[2]); // orange
console.log('Last fruit:', fruits[fruits.length - 1]); // mango

// Array length property
console.log('\n--- Array Length ---');
console.log('Total fruits:', fruits.length); // 4
console.log('Total numbers:', numbers.length); // 5


// ============================================
// 2. ADDING ELEMENTS TO ARRAY
// ============================================

console.log('\n\n--- ADDING ELEMENTS ---');

// push() - Adds element(s) to the END of array
var colors = ['red', 'blue'];
console.log('Original:', colors);
colors.push('green');
console.log('After push("green"):', colors); // ['red', 'blue', 'green']
colors.push('yellow', 'purple');
console.log('After push("yellow", "purple"):', colors); // ['red', 'blue', 'green', 'yellow', 'purple']

// unshift() - Adds element(s) to the BEGINNING of array
var animals = ['cat', 'dog'];
console.log('\nOriginal:', animals);
animals.unshift('lion');
console.log('After unshift("lion"):', animals); // ['lion', 'cat', 'dog']
animals.unshift('tiger', 'bear');
console.log('After unshift("tiger", "bear"):', animals); // ['tiger', 'bear', 'lion', 'cat', 'dog']


// ============================================
// 3. REMOVING ELEMENTS FROM ARRAY
// ============================================

console.log('\n\n--- REMOVING ELEMENTS ---');

// pop() - Removes and returns the LAST element
var cities = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi'];
console.log('Original:', cities);
var removed = cities.pop();
console.log('Removed:', removed); // Rajshahi
console.log('After pop():', cities); // ['Dhaka', 'Chittagong', 'Sylhet']

// shift() - Removes and returns the FIRST element
var cars = ['Toyota', 'Honda', 'Ford', 'BMW'];
console.log('\nOriginal:', cars);
var firstCar = cars.shift();
console.log('Removed:', firstCar); // Toyota
console.log('After shift():', cars); // ['Honda', 'Ford', 'BMW']


// ============================================
// 4. SLICE() - Extract portion of array (doesn't modify original)
// ============================================

console.log('\n\n--- SLICE() METHOD ---');

var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log('Original:', days);

// slice(start, end) - end is not included
var weekdays = days.slice(0, 5);
console.log('Weekdays (0 to 5):', weekdays); // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

var weekend = days.slice(5);
console.log('Weekend (from 5):', weekend); // ['Sat', 'Sun']

var midWeek = days.slice(2, 4);
console.log('Mid-week (2 to 4):', midWeek); // ['Wed', 'Thu']

console.log('Original unchanged:', days); // Still complete


// ============================================
// 5. SPLICE() - Add/Remove elements at specific position (modifies original)
// ============================================

console.log('\n\n--- SPLICE() METHOD ---');

// splice(start, deleteCount, item1, item2, ...)
var students = ['Rahim', 'Karim', 'Salma', 'Nadia'];
console.log('Original:', students);

// Remove elements
var removed1 = students.splice(1, 2); // Remove 2 elements starting at index 1
console.log('Removed:', removed1); // ['Karim', 'Salma']
console.log('After removal:', students); // ['Rahim', 'Nadia']

// Add elements without removing
var students2 = ['Alice', 'Bob', 'Charlie'];
students2.splice(1, 0, 'David', 'Eve'); // Add at index 1, remove 0
console.log('After adding:', students2); // ['Alice', 'David', 'Eve', 'Bob', 'Charlie']

// Replace elements
var subjects = ['Math', 'English', 'Old', 'Science'];
subjects.splice(2, 1, 'History'); // Replace 'Old' with 'History'
console.log('After replace:', subjects); // ['Math', 'English', 'History', 'Science']


// ============================================
// 6. CONCAT() - Merge arrays (doesn't modify original)
// ============================================

console.log('\n\n--- CONCAT() METHOD ---');

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var combined = arr1.concat(arr2);
console.log('arr1 + arr2:', combined); // [1, 2, 3, 4, 5, 6]

var allCombined = arr1.concat(arr2, arr3);
console.log('arr1 + arr2 + arr3:', allCombined); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Can also concat individual values
var nums = [1, 2].concat(3, 4, [5, 6]);
console.log('Mixed concat:', nums); // [1, 2, 3, 4, 5, 6]


// ============================================
// 7. INDEXOF() & LASTINDEXOF() - Find position of element
// ============================================

console.log('\n\n--- INDEXOF() & LASTINDEXOF() ---');

var letters = ['a', 'b', 'c', 'b', 'd', 'b'];
console.log('Array:', letters);

// indexOf() - finds FIRST occurrence
console.log('indexOf("b"):', letters.indexOf('b')); // 1
console.log('indexOf("d"):', letters.indexOf('d')); // 4
console.log('indexOf("z"):', letters.indexOf('z')); // -1 (not found)

// lastIndexOf() - finds LAST occurrence
console.log('lastIndexOf("b"):', letters.lastIndexOf('b')); // 5

// Starting from specific index
console.log('indexOf("b", 2):', letters.indexOf('b', 2)); // 3 (start search from index 2)


// ============================================
// 8. INCLUDES() - Check if element exists (returns true/false)
// ============================================

console.log('\n\n--- INCLUDES() METHOD ---');

var foods = ['rice', 'bread', 'pasta', 'noodles'];
console.log('Array:', foods);

console.log('Includes "rice"?', foods.includes('rice')); // true
console.log('Includes "pizza"?', foods.includes('pizza')); // false
console.log('Includes "RICE"?', foods.includes('RICE')); // false (case-sensitive)


// ============================================
// 9. JOIN() - Convert array to string
// ============================================

console.log('\n\n--- JOIN() METHOD ---');

var words = ['Hello', 'World', 'JavaScript'];
console.log('Array:', words);

var sentence = words.join(' '); // Join with space
console.log('join(" "):', sentence); // Hello World JavaScript

var csv = words.join(','); // Join with comma
console.log('join(","):', csv); // Hello,World,JavaScript

var hyphenated = words.join('-');
console.log('join("-"):', hyphenated); // Hello-World-JavaScript

var noSeparator = words.join('');
console.log('join(""):', noSeparator); // HelloWorldJavaScript


// ============================================
// 10. REVERSE() - Reverse array order (modifies original)
// ============================================

console.log('\n\n--- REVERSE() METHOD ---');

var counting = [1, 2, 3, 4, 5];
console.log('Original:', counting);
counting.reverse();
console.log('After reverse():', counting); // [5, 4, 3, 2, 1]

var names = ['Amir', 'Bashir', 'Chand'];
console.log('\nOriginal:', names);
names.reverse();
console.log('After reverse():', names); // ['Chand', 'Bashir', 'Amir']


// ============================================
// 11. SORT() - Sort array elements (modifies original)
// ============================================

console.log('\n\n--- SORT() METHOD ---');

// Sorting strings (alphabetically)
var countries = ['Bangladesh', 'India', 'Pakistan', 'Afghanistan', 'Nepal'];
console.log('Original:', countries);
countries.sort();
console.log('After sort():', countries); // Alphabetical order

// Sorting numbers (CAREFUL!)
var scores = [100, 20, 50, 3, 90];
console.log('\nOriginal:', scores);
scores.sort(); // WRONG for numbers!
console.log('sort() without compare:', scores); // [100, 20, 3, 50, 90] - WRONG!

// CORRECT way to sort numbers
var scores2 = [100, 20, 50, 3, 90];
scores2.sort(function(a, b) {
    return a - b; // Ascending order
});
console.log('Correct ascending sort:', scores2); // [3, 20, 50, 90, 100]

var scores3 = [100, 20, 50, 3, 90];
scores3.sort(function(a, b) {
    return b - a; // Descending order
});
console.log('Descending sort:', scores3); // [100, 90, 50, 20, 3]


// ============================================
// 12. TOSTRING() - Convert array to comma-separated string
// ============================================

console.log('\n\n--- TOSTRING() METHOD ---');

var items = ['apple', 'banana', 'orange'];
var str = items.toString();
console.log('Array:', items);
console.log('toString():', str); // apple,banana,orange
console.log('Type:', typeof str); // string


// ============================================
// 13. FIND() - Returns first element that matches condition
// ============================================

console.log('\n\n--- FIND() METHOD ---');

var ages = [12, 15, 18, 21, 25, 30];
console.log('Array:', ages);

// Find first age >= 18
var adult = ages.find(function(age) {
    return age >= 18;
});
console.log('First adult age:', adult); // 18

var over25 = ages.find(function(age) {
    return age > 25;
});
console.log('First age over 25:', over25); // 30

var under10 = ages.find(function(age) {
    return age < 10;
});
console.log('Age under 10:', under10); // undefined (not found)


// ============================================
// 14. FINDINDEX() - Returns index of first element that matches
// ============================================

console.log('\n\n--- FINDINDEX() METHOD ---');

var prices = [50, 100, 200, 150, 300];
console.log('Array:', prices);

var expensive = prices.findIndex(function(price) {
    return price > 150;
});
console.log('Index of first price > 150:', expensive); // 2 (price 200)

var cheap = prices.findIndex(function(price) {
    return price < 100;
});
console.log('Index of first price < 100:', cheap); // 0 (price 50)


// ============================================
// 15. PRACTICAL EXAMPLES
// ============================================

console.log('\n\n--- PRACTICAL EXAMPLES ---');

// Example 1: Shopping Cart
console.log('\n-- Shopping Cart --');
var cart = [];
cart.push('Shirt'); // Add item
cart.push('Pants');
cart.push('Shoes');
console.log('Cart:', cart);
console.log('Items in cart:', cart.length);

var lastItem = cart.pop(); // Remove last item
console.log('Removed:', lastItem);
console.log('Updated cart:', cart);

// Example 2: Student Grades
console.log('\n-- Student Grades --');
var grades = [85, 90, 78, 92, 88];
console.log('Grades:', grades);

// Sort to find highest and lowest
var sortedGrades = grades.slice().sort(function(a, b) { return a - b; });
console.log('Sorted:', sortedGrades);
console.log('Lowest grade:', sortedGrades[0]);
console.log('Highest grade:', sortedGrades[sortedGrades.length - 1]);

// Example 3: To-Do List
console.log('\n-- To-Do List --');
var todos = ['Buy milk', 'Study JavaScript', 'Exercise'];
console.log('Todos:', todos);

// Add urgent task at beginning
todos.unshift('Finish homework');
console.log('After adding urgent task:', todos);

// Check if task exists
if (todos.includes('Study JavaScript')) {
    console.log('JavaScript study is on the list!');
}

// Example 4: Merging Class Lists
console.log('\n-- Merging Classes --');
var classA = ['Student1', 'Student2', 'Student3'];
var classB = ['Student4', 'Student5'];
var allStudents = classA.concat(classB);
console.log('All students:', allStudents);
console.log('Total students:', allStudents.length);


// ============================================
// PRACTICE CHALLENGES (Try these yourself!)
// ============================================

console.log('\n\n--- PRACTICE CHALLENGES ---');
console.log('1. Create an array of 5 of your favorite movies');
console.log('2. Add a new movie to the end');
console.log('3. Remove the first movie');
console.log('4. Find if "Inception" is in your list');
console.log('5. Sort the movies alphabetically');
console.log('6. Get the first 3 movies from the sorted list');
console.log('7. Join all movie names with " | " separator');
console.log('\nTry writing the code below this line!\n');

// Your practice code here:
