var parCheck = function (s) {
  let arr = new Array();
  let n = s.length;
  let map = new Map();
  map.set(")", "(");
  map.set("]", "[");
  map.set("}", "{");

  if (n === 0) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (!map.has(s[i])) {
      arr.push(s[i]);
    } else if (map.get(s[i]) !== arr.pop()) {
      return false;
    }
  }

  return arr.length === 0;
};

var s = "[]";
console.log(parCheck(s));

//Time Complexity - O(n), where n is the length of string
//Space Complexity - O(n), where n is the length of string
