////////// PROBLEM 1 //////////

// ***** Do not edit the code below *****
function findGrape (arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i].color === "purple") {
            return console.log(`The fruit with index ${arr.indexOf(arr[i])} is a grape`)
        } 
    }
}
// ***** Do not edit the code above *****

/*
The code above is an example of 'function declaration.' Please re-write the function in 'function expression' and 'arrow function' syntaxes. 
*/

// RE-WRITE THE ABOVE FUNCTION IN 'FUNCTION EXPRESSION' SYNTAX HERE.


const findGrape1 = function (arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i].color === "purple") {
            return console.log(`The fruit with index ${arr.indexOf(arr[i])} is a grape`)
        } 
    }
}


// RE-WRITE THE ABOVE FUNCTION IN 'ARROW FUNCTION' SYNTAX HERE.

const findGrape2 = () => {
    for(let i=0; i<arr.length; i++) {
        if(arr[i].color === "purple") {
            return console.log(`The fruit with index ${arr.indexOf(arr[i])} is a grape`)
        } 
    }
}

////////// PROBLEM 2 //////////
/*
Write a one line function (give a name of your choice) with an implicit return that when the function is invoked, it will print: 'The first parameter is [parameter1]. The second parameter is [parameter2]'.
*/

// CODE HERE

const parmParm = (parm1, parm2) => `The first parameter is ${parm1}. The second one is ${parm2}`


// INVOKE THE FUNCTION HERE. THE PARAMETERS TAKE ANY DATATYPE.

console.log(parmParm('Uch', 'Tanner'))


console.log('===========================')


////////// PROBLEM 3 //////////
/*
Write a function called 'greeting' that takes 3 parameters: firstName, lastName, and a callback function. In the function, invoke the callback, passing in a concatenation of firstName and lastName. 
Then, outside of the greeting function, invoke the greeting function, passing in the value firstName and lastName of your choice, and a callback function that takes a parameter of fullName. The callback function will print 'Hello, my full name is [fullName]'. 
*/

// CODE 'GREETING FUNCTION' HERE

function greeting(firstName, lastName, callback){
  return  callback(firstName += lastName)
}


function greetCb(fullName){
    return `hello, my full name is ${fullName}`
}

// INVOKE 'GREETING FUNCTION' HERE

console.log(greeting('Tanner', 'Vanlangeveld', greetCb))


console.log('======================Problem 4==========================')

////////// PROBLEM 4 //////////

// ***** Do not edit the code below *****
let prices = [50, 33, 78, 100, 25]

let totalCost = []
// ***** Do not edit the code above *****

/* 
Write a function called 'pricesPlusTax' that takes 2 params: an array ('prices' array) and a callback function. Inside the function, loop over the 'prices' array. For every iteration, calculate a new total cost (original price plus 20% tax), then push it to the 'totalCost' array. After the loop, invoke the callback function, passing in the 'totalCost' array.
*/

// CODE HERE


function pricesPlusTax(arr, callback){
    for(let i = 0; i < arr.length; i++){
        totalCost.push(arr[i] + (arr[i] * .20))
    } return callback(totalCost)
} 

function totCost (totalCost){
   return `the new array plus tax ${totalCost}`
}


/* 
Invoke the 'pricesPlusTax' function, passing in the 'prices' array and a callback function (passing in 'totalCost' as a param) that will print "The new array plus tax = [totalCost]"
*/

// CODE HERE


console.log(pricesPlusTax(prices, totCost))

console.log('=================Problem 5=====================')


////////// PROBLEM 5 //////////

/* 
A function can return another function. Let's create one!

Create a function called 'multiplyingFactory' that takes a number as a param. The function returns another function that takes another number as a param. 

The inner function should run this logic: if the first number passing in is greater than and equal to 5, print the multiplication of the first and second numbers. If not, print "Cannot multiply: the first number is smaller than 5." 
*/

// CODE HERE


function multiplyingFactory(num1){
   return (num2) => {
    if(num1 >= 5){
        console.log(num1 * num2)
        } else{
            console.log('Cannot multi the number is smaller than 5')
        }
    }
   }



/* 
Let's invoke the 'multiplyingFactory' function that will return another function, and save it into a variable called 'timesFour.' Let's pass in number 3 as a param.
*/

// CODE HERE
const timesFour = multiplyingFactory(5)

/* 
Now, timesFour is the new function (the inner function that was being returned when we invoked 'multiplyingFactory' function). The number 3 that we passed in as a first number is now saved in the 'timesFour' function. 

Let's invoke 'timesFour' and pass in number 4 as a param. Number 4 here is the second number that will multiply the first number (number 3).

Run the code in node to see the printed result. You should see "Cannot multiply: the first number is smaller than 5."
*/

// INVOKE 'timesFour' HERE

console.log(timesFour(4))


/* 
Change the param for 'multiplyingFactory' invocation to number 5. Then invoke 'timesFour' again, passing in number 4. Run the code in node, and you should see 20.
*/






////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/
console.log('============ Problem 1 ====================')

// CODE HERE

function multiply(num1, num2, callback){
  let newNum = num1 * num2;
  callback(newNum)
}


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

multiply(4, 3, answer => {
  console.log('The answer is ' + answer) //should console.log 12
})



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// first(names, firstName => {
//   console.log('The first name in names is ' + firstName)
// })



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// last(names, lastName => {
//   console.log('The last name in names is ' + lastName)
// })



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// contains(names, 'Colt', result => {
//   if(result === true){
//     console.log('Colt is in the array')
//   } else {
//     console.log('Colt is not in the array')
//   }
// })



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE

/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE



////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 


/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE





////////// CHALLENGES //////////


////////// CHALLENGE 1 //////////


/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE




////////// CHALLENGE 2 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
  You'll learn about objects in our next lecture. But you can research objects and attempt this problem.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// getUserById(users, '16t', user => {
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
// })