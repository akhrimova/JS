//1
let num = ((100*100) % (15*25));
console.log(num);
//2
let area = (1500-600);
console.log(area);
//3
function maxOfThree(num1, num2, num3) {
 if (num1 > num2 && num1 > num3) {
 return num1;
}else if (num2 > num1 && num2 > num3) {
return num2;
 } else {
 return num3;
 }
}
alert(maxOfThree(1,3,2));
//4
function nearTen(n1, n2) {
    
 if ((10-n1) < (10-n2)) {
 return n1;
}else if ((10-n1) > (10-n2)) {
return n2;
 } 
}
alert(nearTen(-10,5));