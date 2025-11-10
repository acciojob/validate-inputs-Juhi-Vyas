
let namePattern = /^[A-Za-z]{3,}$/
let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
let mobilePattern = /^[0-9]{10}$/


let name = document.getElementById("name");
let email = document.getElementById("email")
let number = document.getElementById("number")

name.addEventListener("input", () => {
  let nameValue = name.value;

  if (namePattern.test(nameValue)) {
    name.style.backgroundColor = "lightgreen";
  } else {
    name.style.backgroundColor = "pink";
  }
});

email.addEventListener("input", () => {
	let emailValue = email.value
	if(emailPattern.test(emailValue)){
		email.style.backgroundColor = "lightgreen"
	}else{
		email.style.backgroundColor = "pink"
	}
})

number.addEventListener("input", () => {
	let numberValue = number.value
	if(mobilePattern.test(numberValue)){
		number.style.backgroundColor = "lightgreen"
	}else{
		number.style.backgroundColor = "pink"
	}
})



