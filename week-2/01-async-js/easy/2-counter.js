function counter(n) {
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      console.log(n - i)
    }, (n - i) * 1000)
  }
}
let n = 10
counter(n);
