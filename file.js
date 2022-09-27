const form = document.getElementById('form1');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');
const contactNumber = document.getElementById('contact');
const submitBtn = document.getElementById('SubmitBtn');

let formValid = true;
submitBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    validateinputs();
    if (formValid) {
        form.submit();
        alert('Form Submited')
    }
})
const seterror = (element, message) => {
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.querySelector('span');
    errordisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}

const setsuccess = element => {
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.querySelector('span');
    errordisplay.innertext = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

const isValidEmail = email=>{
    const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

const validateinputs = () =>{
    const firstnamevalue = firstname.value.trim();
    const lastnamevalue  = lastname.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const confirmPasswordvalue = confirmPassword.value.trim();
    const contactNumbervalue = contactNumber.value.trim();

    if(firstnamevalue === ''){
        seterror(firstname, 'firstname is required');
        formValid = false;
    }else{
        setsuccess(firstname); 
    }

    if(lastnamevalue === ''){
        seterror(lastname, 'lastname is required');
        formValid = false;
    }else{
        setsuccess(lastname);
    }

    if(emailvalue === ''){
        seterror(email, 'email is required');
    }else if (!isValidEmail (emailvalue)){
        seterror(error,'Provide a Valid email addresss'); 
    }else{
        setsuccess(email);
    }

    if(passwordvalue === ''){
        seterror(password, 'password is required');
    }else if(passwordvalue.length<8){
        seterror(password,'password must be atleast 8 charectors.');
    }else{
        setsuccess(password);
    }

    if(confirmPasswordvalue === ''){
        seterror(confirmPassword, 'please confirm your password');
    }else if(confirmPasswordvalue!==passwordvalue){
        seterror(confirmPassword,"password doesn't match");
    }else{
        setsuccess(confirmPassword);
    }

    if(contactNumbervalue === ''){
        seterror(contactNumber, 'contact number is required');
    }else if(contactNumbervalue.length<10){
        seterror(contactNumber,'please enter a valid phone number');
    }else{
        setsuccess(contactNumber);
    }   

}