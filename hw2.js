// week 2 Home Work:
/* HomeWork:
    1. Declare variable with string. ex. var name = ""
    2. Print how much drink will be consume tonight.
        ex . console.log(`Today, I consume ${ name[]} cups of ${ name[]})`);
        ex2. var drinks = ["Coffee", "tea", "milk"];
            var location = ["library", "home"];

console.log(`Today, I consume ${drinks[1]} in the morning, then I went to the ${location[1]}`);
    3. Declare array and use .length() method to find out how many are there?
    4. Con't from Q3 - use push in array
    5. Create new array and use reverse()method and join()
   BONUS:
    6. Use any High methods order: .forEach, .fiter(), .reduce(). create arrays.
*/
/***** Answer Question below here *****/

var drinks = ["Coffee", "tea", "milk"];
var location = ["library", "home"];

console.log(`Today, I consume ${drinks[1]} in the morning, then I went to the ${location[1]}`);

//Question 1
var firstName = "Nehemiah";
//Question 2
console.log(`I will drink 2 ${drinks[2]} in the morning, and in the afternoon I went to the ${location[0]}`);
//Question 3
var color = ["red", "blue", "green"];
console.log(color.length);
//Question 4
color.push("black");
console.log(color);
//Question 5
var objects = ["books", "disk", "chair"];
console.log(objects.reverse());
console.log(objects.join());
//Question 6
var result = location.fliter( location => location.length > 4);
console.log(location);