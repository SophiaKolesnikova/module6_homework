function getNum(from, to) {
  let num = from;
  const intervalId = setInterval(function() {
    console.log(num);
    if (num == to) {
      clearInterval(intervalId);
    }
    num++;
  }, 1000);
}
getNum(10, 20);