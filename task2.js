function getSimpleNum(num){
    let getSimpleNum = true;
    let result;
    if(num > 1 && num <= 1000){
      for(let i = 2; i < num; i++){
        if (num % 2 === 0){
         getSimpleNum = false}
         }
      result = getSimpleNum ? `Число ${num} - простое число` : `Число ${num} - составное число`;
      if(num % 1 === 0){
        console.log(result);
      }
    }
    else if(num > 1000){
      console.log('Данные неверны');
    }
    return result;
  }

  getSimpleNum(765);