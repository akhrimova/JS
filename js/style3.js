//1
let arrA = [12,4,3,10,1,20];
let arrB = [-3,-7,-100,-33];
let arrC = arrA.concat(arrB);
console.log(arrC);
//2



//3
let myArray = [12,4,3,10,1,20];
  min = myArray[0];
  max = min;
  for (i = 1; i < myArray.length; ++i) {
      if (myArray[i] > max) max = myArray[i];
      if (myArray[i] < min) min = myArray[i];
  }
  let mini = myArray.pop(min);
  let maxi = myArray.pop(max);
  console.log(myArray);
//4


