var input_str = document.querySelector("#input-str");
let result = document.getElementById("result");

checkStr = () => {
  let str = input_str.value.toLowerCase();
  if (isPalindrome(str)) {
    result.innerText = `Yes! ${input_str.value} is Palindrome. ✔️`;
  } else {
    result.innerText = `No! ${input_str.value} is not Palindrome. ❌`;
  }
};

isPalindrome = (str) => {
  let length = str.length;
  let rev_arr = [];

  for (let i = length - 1; i >= 0; i--) {
    rev_arr.push(str[i]);
  }
  let rev = rev_arr.join("");

  if (str === rev) {
    console.log("True");
    return true;
  } else {
    console.log("False");
    return false;
  }
};
