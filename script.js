let sliderElement = document.querySelector("#slide");
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#value")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#password-container")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*`"
let newPassword = ""

sizePassword.innerHTML = sliderElement.value

slide.oninput = function() {
    sizePassword.innerHTML = this.value
}

function generatePassword(){
   let pass = ""
   for(let i = 0,n = charset.length; i < sliderElement.value; i++){
    pass += charset.charAt(Math.floor(Math.random() * n))
}

containerPassword.classList.remove("hide")
password.innerHTML = pass
newPassword = pass

}

function copyPassword() {
    alert("Password copy!!")
    navigator.clipboard.writeText(newPassword)
}
