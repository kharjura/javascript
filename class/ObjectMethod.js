let obj = {
    name: "Sachin",
    age: 20,
    contact: 1234567,
};
console.log(obj);
console.log("----------------------");
// add a new property birthplace for the obj
obj.birthplace ="chennai";
console.log(obj);

// delete the contact property from obj
delete obj.contact;

console.log(obj);

Object.seal(obj);

// obj.email = "sachit@gmail.com"; cannot add new property after seal()
console.log(obj);
obj.name = "Shankar";
console.log(obj);

Object.freeze(obj);
obj.name = "Sachin"; // cannot modify the present data after freeze()
console.log(obj);

let output = object.entries(obj);
console.log(output);
