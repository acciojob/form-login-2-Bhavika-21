//your JS code here. If required.
const submitButton = document.getElementById("button");
const name = document.getElementById("get-name");
const lastName = document.getelemtById("get-last-name");
const number = document.getelemtById("get-number");
const email = document.getelemtById("get-email");


submitButton.addEventListener("click", ()=>{
	alert(`First Name: ${name}
          Last Name: ${lastName}
		  Number: ${number}
		   Email: ${email}`);
})