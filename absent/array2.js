//create an array
let fruits= ["Apple","Mango","Banana","Orange"];
document.write("orginal Array:"+fruits+"<br>");
document.write("<br>.........................<br>");

// add new element at the end of the array
fruits.push("Grapes");
document.write(fruits+ "<br>");
document.write("<br>.........................<br>");

//add new element at the beginnning of array
fruits.unshift("cherry");
document.write(fruits+ "<br>");
document.write("<br>.........................<br>");

//add elements at index 2 of the array
fruits.splice(2, 0,"pineapple");
document.write(fruits+ "<br>");
//syntax off splice
//splice(index, how many elements to delete,item1,item2,item3)
document.write("<br>.........................<br>");

//delete an element at the last of an array
fruits.pop();
document.write(fruits+ "<br>");
document.write("<br>.........................<br>");


// delete an element at index 2 of an array
fruits.splice(2,1);
document.write(fruits+ "<br>");
document.write("<br>.........................<br>");

//delete an element at beggining of array
fruits.shift();
document.write(fruits+ "<br>");
document.write("<br>.........................<br>");
