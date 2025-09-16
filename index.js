const cats = ["Milo", "Otis", "Garfield"];

// Destructively appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructively removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructively removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
  return [...cats, name];
}

// Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
  return [name, ...cats];
}

// Removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1);
}

//console.log(removeFirstCat());
//console.log(removeLastCat());
//console.log(prependCat("Bob"));
//console.log(appendCat("Broom"));
//console.log(destructivelyRemoveFirstCat(0));
//console.log(destructivelyRemoveLastCat(2));
//console.log(destructivelyPrependCat("Bob"));
//console.log(destructivelyAppendCat("Broom"));
console.log(cats);