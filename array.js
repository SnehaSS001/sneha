var first = [ 1, 2, 3,5 ];
var second = [ 2, 3, 4, 5 ];
var common = first.filter(x => second.indexOf(x) !== -1)
//console.log("The common elements are: "+ common)  

var myArray1 = [5, 7, 9];
var myArray2 = [9, 8, 5, 10];
var myFinalArray = myArray1.concat(myArray2.filter((item) => myArray1.indexOf(item) < 0));
console.log(myFinalArray);