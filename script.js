let sliderElement = document.querySelector("#slide");
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#value")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#password-container")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*`"
let newPassword = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function() {
    sizePassword.innerHTML = this.value
}