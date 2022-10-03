function fibo(num) {
  let fibo = [0, 1];
  for (let i = 0; i < num; i++) {
    if (fibo.length === num) return fibo;
    fibo.push(fibo[i] + fibo[i + 1]);
  }
}
fibo(5);
