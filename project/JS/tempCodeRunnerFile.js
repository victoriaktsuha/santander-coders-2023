let arr = ["Nome", 26, 1.77, true];
console.log(arr);
console.log(arr[0]);
console.log(arr[1], arr[2], arr[3]);
console.log(arr.length); // 4

for (let i = 0; i < arr.lenght; i++) {
  console.log(arr[i]);
}

for (let el of arr) {
  /* 'of' percorre os elementos*/
  console.log(el);
}

for (let el in arr) {
  /* 'in' percorre os index*/
  console.log(el);
}
