
      // "matches": ["https://*/login"],

let loginUsername = localStorage.getItem('enmUsername')
let loginPassword = localStorage.getItem('enmPassword')

if (loginUsername === null || loginPassword === null) {
    let promptUsername = prompt("Please enter your login name", "Harry Potter")
    let promptPassword = prompt("Please enter your password", "Harry@Potter")
    localStorage.setItem('enmUsername', promptUsername)
    localStorage.setItem('enmPassword', promptPassword)
}

document.getElementById("loginUsername").value = localStorage.getItem('enmUsername')
document.getElementById("loginPassword").value = localStorage.getItem('enmPassword')
