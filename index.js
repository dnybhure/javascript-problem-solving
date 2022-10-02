// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let arr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);
  appDiv.innerHTML += arr[i];
}

// 1) swap two number without using third number

let a = 20;
let b = 30;

a = a + b;
b = a - b;
a = a - b;
appDiv.innerHTML = `the value of a is ${a} and the value of b is ${b}`;
// 2) check given number is palimdrom or not
let ispalimDrom = (x) => {
  let reverse = 0;
  let original = x;
  while (x > 0) {
    let reminder = x % 10;
    reverse = reverse * 10 + reminder;
    x = Math.floor(x / 10);
  }
  if (original == reverse) {
    appDiv.innerHTML = true;
  } else {
    appDiv.innerHTML = false;
  }
};
ispalimDrom(121);
ispalimDrom(12112);
// 2) Running sum of element
let number = [1, 2, 3, 4, 5];
let num;

function runningSum(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] += numbers[i - 1];
  }
  console.log(numbers);
}
runningSum(number);
// 2) call apply and bind method
let user = {
  firstName: 'dnyanesh',
  lastName: 'Bhure',
};
function fullname(add) {
  let sentence = `${this.firstName} ${this.lastName} ${add}`;
  console.log(sentence);
  return sentence;
}
fullname.call(user, 'sbi colony');
fullname.apply(user, ['sbi colony']);
let getFullNameByApplyMethod = fullname.bind(user, ['sbi colony']);
getFullNameByApplyMethod();

console.log(getFullNameByApplyMethod);
// 3) recursive function

function recursive(number) {
  console.log(number);
  let countDownNumber = number;
  countDownNumber = countDownNumber - 1;
  if (countDownNumber > 0) {
    recursive(countDownNumber);
  }
}
recursive(5);
