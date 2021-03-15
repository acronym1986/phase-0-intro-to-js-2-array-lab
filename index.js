
// declaring assignment
const cats = ["Milo", "Otis", "Garfield"];
  

//append cat name to array
const name = "Ralph";
function destructivelyAppendCat(name) {
   cats.push(name);
   return cats;
}
//destructivelyAppendCat("Ralph");


//prepend cat name from array 
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
} 
//destructivelyPrependCat("Bob");

//remove the last cat name
function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}
//destructivelyRemoveLastCat("Garfield");

//remove the first cat name 
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}
//estructivelyRemoveFirstCat("Milo");


//append last cat without mutating original
function appendCat(name){
    const copyCats = [...cats, name];
    return copyCats;
}
//appendCat("Broom");

//prepend first cat without mutating original
function prependCat(name){
    const copyCats = [name, ...cats];
    return copyCats;
}
//prependCat("Arnold");


//remove last cat without changing 
function removeLastCat(){
    const copyCats = cats.slice(0, -1);
    return copyCats;
}
//removeLastCat();


//remove first cat without changing 
function removeFirstCat(){
    const copyCats = cats.slice(1);
    return copyCats;
}
//removeFirstCat();
