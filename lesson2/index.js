function generateFibonacci(n) {
  if(n < 2) return console.log(Array(n).fill(0));
  
  const arr = [0, 1];
  for (let i = 2; i < n; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
  return console.log(arr);
}

function confirmArmstrongNumber(n) {
  const arr = ('' + n).split('');
  if ((arr[0] ** 3 + arr[1] ** 3 + arr[2] ** 3) === n) return console.log(true);
}


function generateArray(firstNumber, secondNumber) {
  return console.log(Array(secondNumber - firstNumber + 1)
    .fill(firstNumber).map((item, index) => item + index));
}

generateArray(4, 7);
generateFibonacci(1);
confirmArmstrongNumber(371);