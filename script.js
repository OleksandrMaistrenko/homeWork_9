// Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад:

function addNumber() {
  let count = 0;
  return function (a) {
    return (count += a);
  };
}

let sum = addNumber();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28
