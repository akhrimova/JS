//1
let month =11;
switch(month) {
    case 12:
    case 1:
    case 2:
        console.log("winter");
        break;
    case 3:
    case 4:
    case 5: 
        console.log("spring");
        break;
    case 6:
    case 7:
    case 8:    
        console.log("summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("autumn");
        break;
   }
//2
let L =7;
let length = 4;
switch(length) {
    case 1:console.log(L/10);
    break;
    case 2:console.log(L*1000);
    break;
    case 3:console.log(L);
    break;
    case 4:console.log(L/1000);
    break;
    case 5:console.log(L/100);
    break;
}

//3
/*не понимаю, через какой оператор решается задача*/
//4

for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0) {
    console.log('Three');
  } else if (i % 5 === 0 && i % 3 != 0) {
    console.log('Five');
  }
   if (i % 3 === 0 && i % 5 === 0) {
    console.log('ThreeFive');
  }
  else {
    console.log(i);
  }
}
