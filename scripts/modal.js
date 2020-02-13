//1. Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.

const fib = function(N) {
  if (N <= 1) {
    return N
  }
  return fib(N-1) + fib(N-2)
};

// 2. Реализуйте функцию uniq(), которая принимает массив
// чисел и возвращает уникальные числа, найденные в нём.
// Может ли функция решить эту задачу за время O(N)?

const uniq = (array) => {
  return array.filter((el, index, all) => all.indexOf(el) === index)
};

// 3. Реализуйте функцию permute(), которая возвращает
// массив строк, содержащий все пермутации заданной строки.

const permute = function(string) {
  let results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i];
    const charsLeft = string.substring(0, i) + string.substring(i + 1);
    const innerPermutations = permute(charsLeft);
    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
};

const modal = document.getElementById('modal');
const btn = document.getElementsByClassName('button');
const close = document.getElementsByClassName('close')[0];
const inner = document.getElementsByClassName('task');
const answerButton = document.getElementsByClassName('answerButton');
const answer = document.getElementsByClassName('answer');
const input = document.getElementsByClassName('input');
let open = 0;

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = (event) => {
    switch(event.target.id) {
      case 'btn1': {
        inner[0].style.display = 'block';
        open = 0;
      } break;
      case 'btn2': {
        inner[1].style.display = 'block';
        open = 1;
      } break;
      case 'btn3': {
        inner[2].style.display = 'block';
        open = 2;
      } break;
    }
    modal.style.display = "block";
}}

close.onclick = function() {
  inner[open].style.display = 'none';
  modal.style.display = "none";
  answer[open].innerHTML = '';
  input[open].value = '';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    inner[open].style.display = 'none';
    answer[open].innerHTML = '';
    input[open].value = '';
  }
};

for (let i= 0; i < answerButton.length; i++) {
  answerButton[i].onclick = () => {
    switch (open) {
      case 0: {
        const input = document.getElementById('fib');
        const answer = document.getElementById('fibAnswer');
        answer.innerHTML = fib(Number(input.value));
      }
      break;
      case 1: {
        const input = document.getElementById('uniq');
        const answer = document.getElementById('uniqAnswer');
        answer.innerHTML = uniq(input.value.split(',').map(el => Number(el)));
      }
        break;
      case 2: {
        const input = document.getElementById('permute');
        const answer = document.getElementById('permuteAnswer');
        answer.innerHTML = permute(input.value).join(', ');
      }
        break;
    }
  };
}
