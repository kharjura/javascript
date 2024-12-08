// an asynchronus function returning a value to a global variable


// this one showcases the disadvantage of asynchronous programming
let myvalues;
function assignvalue(input){
    setTimeout(() =>{
        myvalues=input;

    },2000);
}
function printvalue(){
    console.log("the given values is"+ myvalues);
}
assignvalue(100);
printvalue();