let arr = [0.25, 0, 15, null, 63, 24, undefined, 8];
function getEvenOdd(arr) {
let zero = 0;
let number = 0;
let even = 0;
let odd = 0;
let otherType = 0;
for (let i = 0; i < arr.length; i++) {
   if (typeof arr[i] === 'number') {
       number ++;
       if (arr[i] === 0) {
           zero ++;
       } else if (arr[i] % 2 === 0) {
           even ++;
       } else if (arr[i] % 1 === 0) {
            odd ++;
       } else {
           otherType ++;
       }
       }
   }   
console.log(`В массиве ${number} цифр, ${zero} нулей, ${even} чётных чисел, ${odd} нечётных чисел, ${otherType} тип данных не число.`);
}
   getEvenOdd(arr);

