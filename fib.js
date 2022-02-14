const fib = position => {
  let array = [0, 1];
  let i = 0;
  while (array.length <= position) {
    array.push(array[i] + array[i + 1]);
    i++;
  }
  return array[position];
};

fib(10);
