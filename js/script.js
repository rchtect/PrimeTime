function isPrime() {
  let text;
  let num = prompt("Please enter a number");
  let choice = num;
  if (num == null || num == "" || isNaN(num) == true) {
    text = "An error occured, try to type a number.";
  } else {
    answer = "is a prime number.";
    if (num <= 1 || (num % 2 == 0 && num > 2)) {
      answer = "is not a prime number.";
    }
    const s = Math.sqrt(num);
    for (let i = 3; i <= s; i += 2) {
      // we start from 3, stop at the square, increment it in twos
      if (num % i === 0) {
        answer = "is not a prime number.";
      }
    }
    text = choice + " " + answer;
  }
  document.getElementById("result").innerHTML = text;
}
