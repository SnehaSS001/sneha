const form = document.getElementById('form1');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email    = document.getElementById('email');
const submitBtn = document.getElementById('SubmitBtn');
let formValid = true;
submitBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    validateinputs();
    if (formValid) {
        form.submit();
        alert('Form Submited')
    } else (
        alert('Form Submit Failed')
    )
})

const seterror = (element, message) => {
    const inputcontrol = element.parentElement;
    console.log(inputcontrol);
    const errordisplay = inputcontrol.querySelector('.error');
    errordisplay.innertext = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}

const setsuccess = element => {
    const inputcontrol = element.parentElement;
    console.log(inputcontrol);
    const errordisplay = inputcontrol.querySelector('.error');
    errordisplay.innertext = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

const validateinputs = () =>{
    const firstnamevalue = firstname.value.trim();
    const lastnamevalue  = lastname.value.trim();
    const emailvalue     = email.value.trim();

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

   
    
    

}
