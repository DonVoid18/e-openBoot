let fact = 1;
let i = 1;
while (true) {
  fact *= i;
  i++;
  if (i > 10) {
    break;
  }
}

console.log(fact);
