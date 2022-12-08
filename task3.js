function calcSum(num1){
    return function(num2){
      return num1 + num2;
    }
  }
  const num1 = 5;
  const num2 = 7;
  
  console.log(calcSum(num1)(num2));