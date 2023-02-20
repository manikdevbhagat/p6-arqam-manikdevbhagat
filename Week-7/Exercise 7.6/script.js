var Queue = function (arr) {
    let s1 = [];
    let s2 = [];
    let i = 0;
    while (i < arr.length) {
      //if 1 is encountered, push next element to s1
      if (arr[i] === 1) {
        s1.push(arr[i + 1]);
        i = i + 2;
      }
      //if 2 is encountered, pop element from s1
      else if (arr[i] === 2) {
        if (s1.length === 0) {
          console.log(-1); //print -1 if s1 is empty
        } else if (s1.length === 1) {
          console.log(s1.pop());
        } else {
          let n = s1.length;
          for (let j = 0; j < n; j++) {
            s2.push(s1.pop()); //s2 is reverse of s1
          }
          console.log(s2.pop()); //remove and print the last element of s2
          n = s2.length;
          for (let j = 0; j < n; j++) {
            s1.push(s2.pop()); //reverse s2 to get the orignial array back without the first element
          }
        }
        i++;
      }
    }
    return s1;
  };
  
  var arr = [1, 2, 2, 2, 1, 4];
  
  console.log(Queue(arr));
  