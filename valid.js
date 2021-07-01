	//Validtion Code For Inputs

const email = document.forms['form']['email'];
const password = document.forms['form']['password'];

const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}


//STARTS  POST METHOD
  
document.getElementById('addPost').addEventListener('submit' , addPost);

function addPost (e){
  e.preventDefault();
  let name = document.getElementById('name').value;
  let job = document.getElementById('job').value;

fetch('https://reqres.in/api/users' , {
  method:'POST', 
  headers : {
    'Content-type' : 'application/json'
  },
  body: JSON.stringify( {name:name , job:job})
})
.then(response => {
  return response.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))}

// ENDS POST METHOD 