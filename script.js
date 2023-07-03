let password = document.getElementById("password")
let generateButton = document.getElementById("btn-generate")
let passwordLength = 8

const characters = [
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ["!", "@", "#", "$", "%", "&", "?", "_", "-"]
];

generateButton.addEventListener("click", () => {
  password.innerHTML = generatePassword(passwordLength)
})


function generatePassword(length) {
  let newPassword = Array(length)

  for(let i = 0; i < length; i++) {
    let charsIndex = Math.floor(Math.random() * characters.length);

    let charPos = Math.floor(Math.random() * characters[charsIndex].length);
    newPassword[i] = characters[charsIndex][charPos]
  }

  return newPassword.join("")
}