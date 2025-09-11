// ! split()
console.log("split() examples");
console.log("Using Arrow function");
const splitFunction = (str) => {
  let result = [];
  if (str.includes(" ") === true) {
    let strArr = str.split(" ");
    for (let i = 0; i < strArr.length; i++) {
      let temp = strArr[i].split("");
      result.push(...temp);
    }
  } else {
    result.push(str.split(""));
  }
  return result;
};

console.log(splitFunction("good"));
console.log(splitFunction("thank you"));
console.log(splitFunction("iam fine"));
console.log(splitFunction("hi hello how are you"));

console.log("Normal way without using function");

// Example 1:
/* 
-------------------------------
 var a = "good"
----------------------------------
*/
var a = "good";
var result = a.split("");
console.log(result);

//Example 2:
/* 
-------------------------------
 var a = "thank you"
----------------------------------
*/
var a = "thank you".split(" ");
var str1 = a[0].split("");
var str2 = a[1].split("");
var result = [...str1, ...str2];
console.log(result);

//Example 3:
/* 
-------------------------------
var a = "iam fine"
----------------------------------
*/
var a = "iam fine".split(" ");
var str1 = a[0].split("");
var str2 = a[1].split("");
var result = [...str1, ...str2];
console.log(result);

//Example 4:
/* 
-------------------------------
var a = "hi hello how are you"
----------------------------------
*/
var a = "hi hello how are you".split(" ");
var result = [];
for (let i = 0; i < a.length; i++) {
  let temp = a[i].split("");
  result.push(...temp);
}
console.log(result);

// ! join()
console.log("join() examples");
console.log("Using Arrow function");
const joinFunction = (str, joinChar) => {
  let strArr = str.split("");
  let result = strArr.join(joinChar);
  return result;
};
console.log(joinFunction("guvi", " "));
console.log(joinFunction("guvi", "*"));
console.log(joinFunction("guvigeek", " "));
console.log(joinFunction("guvigeek", "\n"));

console.log("Normal way without using function");
/* Example 1:
----------------------------------------------------------
Input:- 
"guvi"
Ouput:-
g u v i
-------------------------------------------------------------
*/
var a = "guvi".split("");
var result = a.join(" ");
console.log(result);
/* Example 2:
-------------------------------------------------------------
Input:-
"guvi"
output:-
g*u*v*i
----------------------------------------------------------------
*/
var a = "guvi".split("");
var result = a.join("*");
console.log(result);
/* Example 3:
----------------------------------------------------------------
Input:-
"guvigeek"
Output:-
g u v i g e e k
------------------------------------------------------------------
*/
var a = "guvigeek".split("");
var result = a.join(" ");
console.log(result);
/* Example 4:
------------------------------------------------------------------
Input:-
"guvigeek"
Output:-
g
u
v
i
g
e
e
k
-----------------------------------------------------------------
*/
var a = "guvigeek".split("");
var result = a.join("\n");
console.log(result);
