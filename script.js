
let namePattern = /^[A-Za-z]{3,}$/
let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
let mobilePattern = /^[0-9]{10}$/


let name = document.getElementById("#name")
let nameValue = name.value

let email = document.getElementById("#email")
let emailValue = email.value

let number = document.getElementById("#number")
let numberValue = number.value

function validName() {
	if(namePattern.test(nameValue)){
		name.style.backgroundcolor = "lightgreen"
	}
}
function validEmail() {
	if(namePattern.test(emailValue)){
		email.style.backgroundcolor = "lightgreen"
	}
}
function validNumber() {
	if(namePattern.test(numberValue)){
		number.style.backgroundcolor = "lightgreen"
	}
}