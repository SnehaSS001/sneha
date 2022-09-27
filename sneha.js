

const form=document.getElementById("form");
const firstname=document.getElementById("firstname");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmpassword=document.getElementById("password2");
const contactnumber=document.getElementById("contact");


form.addEventListener('submit',e=>{
e.preventDefault(); 
checkinput();
});


function checkinput(){ 
const firstnamevalue = firstname.value.trim();
const usernamevalue = username.value.trim();
const emailvalue = email.value.trim();
const passwordvalue = password.value.trim();
const confirmpasswordvalue = confirmpassword.value.trim();
const contactnumbervalue = contactnumber.value.trim();


if(firstnamevalue === ''){
   seterror(firstname,'firstname cannot be blank');
}
else{
setsuccess(firstname); 
}
if(usernamevalue==='')
{
seterror(username,'username cannot be blank');
}
else{
setsuccess(username);
}  
}
function seterror(input,message){
const formcontrol = input.parentelement;
const small = formcontrol.queryselector('small');
formcontrol.classname = 'forms.error';
small.innertext = message;
}
function setsuccess(input,message){
const formcontrol=input.parentelement;
const small=formcontrol.queryselector('small');
formcontrol.classname='forms.success';
small.innertext=message;
}ss