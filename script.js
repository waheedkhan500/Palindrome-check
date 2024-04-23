const form = document.getElementById("palindrome-form");
const wordInput = document.getElementById("word");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const word = wordInput.value.toLowerCase();
    const isPalindrome = checkPalindrome(word);
    resultDiv.textContent = isPalindrome ? "It is a palindrome" : "It is not a palindrome";
});

function checkPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}