var input_str = document.querySelector("#input-str");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

input_str.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    btn.click();
  }
});

checkStr = () => {
  let str = input_str.value.toLowerCase();
  if (str.length == 0) {
    result.innerText = `Please enter valid string.`;
  } else if (isPalindrome(str)) {
    result.innerText = `Yes! ${input_str.value} is Palindrome. ✔️`;
    result.style.background = "#7cfd5c";
  } else {
    result.innerText = `No! ${input_str.value} is not Palindrome. ❌`;
    result.style.background = "#ffa9a9";
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
