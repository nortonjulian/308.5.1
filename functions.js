//addSum

function addSum(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    return sum;
}

const numbers = [1,2,3]
console.log(addSum(numbers))

//Average

function returnAvg(nums){
    if(nums.length === 0) return 0;
    return addSum(nums) / nums.length;
}

console.log(returnAvg(numbers))

//longest String

function longestStr(arr){
    let longest= "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i]
        }
    }
    return longest
}

const strings = ["apple", "banana", "cherry", "date"];
console.log(longestStr(strings));

function strNum(arr, num){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > num){
            result.push(arr[i])
        }
    }
    return result;
}

const strs = ["apple", "banana", "cherry", "date"];
const minLength = 5;
console.log(strNum(strs, minLength));

function printNums(n, current = 1){
    if(current > n) return;
    console.log(current);
    printNums(n, current + 1)
}

printNums(5)

//Thinking Methodically

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

const sortedByAge = data.slice().sort((a, b) => Number(a.age) - Number(b.age))
console.log("Sorted By Age:", sortedByAge)

const filterByAge = data.filter(person => Number(person.age) <= 50)
console.log("Filtered By Age (<=50):", filterByAge);

const mapArr = data.map(person => ({
    ...person,
    job: person.occupation,
    occupation: undefined,
    age: String(Number(person.age) + 1)
}))

console.log("Mapped Array:", mapArr)

const totalAge = data.reduce((sum, person) => sum + Number(person.age), 0);
console.log("Total Age:", totalAge);

const aveAge = totalAge / data.length;
console.log("Average Age:", aveAge);

//Thinking Critically

function incrementAge(obj) {
    if(!obj.age) obj.age = 0;
    obj.age += 1;
    obj.update_at = new Date();
    return obj;
}

const person1 = { name: "Allen" }
incrementAge(person1);
console.log(person1)

//Thinking Practically

/* Thinking Back
How many of the scripts could be turned into functions?
What would the parameters look like? What kind of returns should they have?
Could you package your code into even smaller blocks, creating helper functions?
*/

//What else could be changed to optimize the code, knowing what you now know?
//I could use the functions from Part 1 to answer the other questions.
