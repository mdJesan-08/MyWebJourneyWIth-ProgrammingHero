// ============================================
// WHY CAN WE CHANGE CONST ARRAYS?
// ============================================

// const means the VARIABLE BINDING is constant
// NOT that the contents are immutable

const arr = [1, 2, 3, 4, 5];
console.log('Original array:', arr); // [1, 2, 3, 4, 5]

// ✅ THIS WORKS - Changing array CONTENTS
arr[1] = 5;
console.log('After arr[1] = 5:', arr); // [1, 5, 3, 4, 5]

// ✅ THIS WORKS - Using array methods
arr.push(6);
console.log('After push(6):', arr); // [1, 5, 3, 4, 5, 6]

arr.pop();
console.log('After pop():', arr); // [1, 5, 3, 4, 5]

// ❌ THIS FAILS - Reassigning the entire variable
// arr = [10, 20, 30]; // ❌ ERROR: Assignment to constant variable
// console.log(arr);

// ❌ THIS FAILS - Assigning a new array
// arr = []; // ❌ ERROR: Assignment to constant variable


console.log('\n--- Understanding const ---');

// Think of it like this:
// const points to a CONTAINER (the array)
// You can change what's INSIDE the container
// But you can't make the variable point to a DIFFERENT container

const myArray = [1, 2, 3];
console.log('myArray:', myArray);

// Changing contents - ALLOWED ✅
myArray[0] = 100;
myArray.push(4);
console.log('Modified contents:', myArray); // [100, 2, 3, 4]

// Creating new array - NOT ALLOWED ❌
// myArray = [5, 6, 7]; // ERROR!


console.log('\n--- Comparison: var vs const ---');

// With var - can reassign
var numbers1 = [1, 2, 3];
console.log('var array:', numbers1);
numbers1[0] = 99; // Can change contents
console.log('Changed contents:', numbers1);
numbers1 = [7, 8, 9]; // Can also reassign entire array
console.log('Reassigned:', numbers1);

// With const - cannot reassign
const numbers2 = [1, 2, 3];
console.log('\nconst array:', numbers2);
numbers2[0] = 99; // Can change contents ✅
console.log('Changed contents:', numbers2);
// numbers2 = [7, 8, 9]; // ❌ Cannot reassign - will throw error


console.log('\n--- What const PROTECTS ---');

const fixedArray = [10, 20, 30];
console.log('Fixed array:', fixedArray);

// const prevents these:
// fixedArray = [];                    // ❌ Can't reassign to empty array
// fixedArray = [1, 2];                // ❌ Can't reassign to different array
// fixedArray = null;                  // ❌ Can't reassign to null
// fixedArray = "not an array";        // ❌ Can't change type

// But allows these:
fixedArray[0] = 100;                   // ✅ Can modify elements
fixedArray.push(40);                   // ✅ Can add elements
fixedArray.pop();                      // ✅ Can remove elements
fixedArray.sort();                     // ✅ Can sort
console.log('After modifications:', fixedArray);


console.log('\n--- Making Arrays TRULY Immutable ---');

// If you want to prevent ANY changes, use Object.freeze()
const frozenArray = Object.freeze([1, 2, 3]);
console.log('Frozen array:', frozenArray);

frozenArray[0] = 999; // Silently fails (no error in normal mode)
console.log('After trying to change:', frozenArray); // Still [1, 2, 3]

// frozenArray.push(4); // ❌ This will throw an error


console.log('\n--- BEST PRACTICES ---');
console.log('1. Use const for arrays that should not be reassigned');
console.log('2. Use let if you need to reassign the variable');
console.log('3. Avoid var (old way, has scoping issues)');
console.log('4. const protects against accidental reassignment');
console.log('5. Use Object.freeze() if you need true immutability');


console.log('\n--- Summary ---');
console.log('const arr = [1,2,3]');
console.log('  ✅ arr[0] = 99       → Can modify elements');
console.log('  ✅ arr.push(4)       → Can use array methods');
console.log('  ❌ arr = [5,6,7]     → Cannot reassign variable');
