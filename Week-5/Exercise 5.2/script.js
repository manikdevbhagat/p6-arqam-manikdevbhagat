//check if an element of the string is a vowel
function isVowel(el) {
  return "aeiou".includes(el);
}

function vowelCount(str) {
  //throw an error if the input is not a string
  if (typeof str !== "string") {
    throw new Error("Invalid input!!");
  }

  let map = new Map();

  for (const el of str) {
    el_l = el.toLowerCase();
    if (isVowel(el_l)) {
      //if key already exists in the map, increment count else set the key and assign value = 1
      if (map.has(el_l)) {
        map.set(el_l, map.get(el_l) + 1);
      } else {
        map.set(el_l, 1);
      }
    }
  }
  return map;
}

console.log(vowelCount("Arqam"));
console.log(vowelCount("Manik"));
