class formvalidation{
    formvalues={
        firstname:"",
        lastname:"",
        department:"",
        username:"",
        password:"",
        confirmpassword:"",
        email:"",
        contact:"",
    }
    errorvalues={
        firstnameerr:"",
        lastnameerr:"",
        departmenterr:"",
        usernameerr:"",
        passworderr:"",
        confirmpassworderr:"",
        emailerr:"",
        contacterr:"",
    }
    getInputs(){
        this.formvalues.firstname=document.getElementById
        ('firstname').value.trim()
        this.formvalues.lastname=document.getElementById
        ('lastname').value.trim()
        this.formvalues.department=document.getElementById
        ('department').value.trim()
        this.formvalues.username=document.getElementById
        ('username').value.trim()
        this.formvalues.password=document.getElementById
        ('password').value.trim( )
        this.formvalues.confirmpassword=document.getElementById
        ('confirmpassword').value.trim()
        this.formvalues.email=document.getElementById
        ('email').value.trim()
        this.formvalues.contact=document.getElementById
        ('contact').value.trim()
   } 
   showerrormsg(input,msg){
       const form_group=document
       getElementByclassname('child')[index]
       form_group.classlist.addclass('error')
       form_group.getElement.tagname('span')[0]
       textcontact=msg
   }
   showsuccessmsg(index){
       const form_group=document.
       getElementsByClassName('child')
       [index]
       form_group.classlist.remove('error')
       form_group.classList.add('success')
   }
   validatefirstname(){
       if(this.formvalues.firstname===""){
       this.errorvalues.firstnameerr="*please enter your firstname"
       this.showerrormsg(0,this.errorvalues.firstnameerr)
    }else if(this.formvalues.firstname.length<=4){
        this.errorvalues.firstnameerr="*firstname must be atleast 5 characters"
        this.showerrormsg(0,this.errorvalues.firstnameerr)
    }else if(this.formvalues.firstname.length>14){
        this.errorvalues.firstnameerr="*firstname should not exceeds 14 characters"
        this.showerrormsg(0,this.errorvalues.firstnameerr)
    }else{
        this.errorvalues.firstnameerr=""
        this.showerrormsg(0)
    }
   }
   validatelastname(){
    if(this.formvalues.lastname===""){
    this.errorvalues.lastnameerr="*please enter your lastname"
    this.showerrormsg(1,this.errorvalues.lastnameerr)
    }else if(this.formvalues.lastname.length<=4){
     this.errorvalues.lastnameerr="*lastname must be atleast 5 characters"
     this.showerrormsg(1,this.errorvalues.lastnameerr)
    }else if(this.formvalues.lastname.length>14){
     this.errorvalues.lastnameerr="*lastname should not exceeds 14 characters"
     this.showerrormsg(1,this.errorvalues.lastnameerr)
    }else{
     this.errorvalues.lastnameerr=""
     this.showerrormsg(1)
    }
   }
   validateusername(){
    if(this.formvalues.username===""){
        this.errorvalues.usernameerr="*please enter your username"
        this.showerrormsg(3,this.errorvalues.usernameerr)
        }else if(this.formvalues.username.length<=4){
         this.errorvalues.usernameerr="*username must be atleast 5 characters"
         this.showerrormsg(3,this.errorvalues.usernameerr)
        }else if(this.formvalues.username.length>14){
         this.errorvalues.usernameerr="*username should not exceeds 14 characters"
         this.showerrormsg(3,this.errorvalues.usernameerr)
        }else{
         this.errorvalues.usernameerr=""
         this.showerrormsg(3)
   }
  }
  validatepassword(){
    if(this.formvalues.password===""){
        this.errorvalues.passworderr="*please provide a password"
        this.showerrormsg(4,this.errorvalues.passworderr)
        }else if(this.formvalues.password.length<=4){
         this.errorvalues.passworderr="*password must be atleast 5 characters"
         this.showerrormsg(4,this.errorvalues.passworderr)
        }else if(this.formvalues.password.length>10){
         this.errorvalues.passworderr="*password should not exceeds 10 characters"
         this.showerrormsg(4,this.errorvalues.passworderr)
        }else{
         this.errorvalues.passworderr=""
         this.showerrormsg(4)
  }
 }
 validateconfirmpassword(){
    if(this.formvalues.confirmpassword===""){
        this.errorvalues.confirmpassworderr="*invalid confirm password"
        this.showerrormsg(5,this.errorvalues.confirmpassworderr)
        }else if(this.formvalues.confirmpassword===this.formvalues.password
            && this.errorvalues.passworderr===""){
         this.errorvalues.confirmpassworderr=""
         this.showsuccessmsg(5)
        }else if(this.errorvalues.passworderr){
         this.errorvalues.confirmpassworderr="*an error occured in password field"
         this.showerrormsg(5,this.errorvalues.confirmpassworderr)
        }else{
         this.errorvalues.confirmpassworderr="*password must match"
         this.showerrormsg(5,this.errorvalues.confirmpassworderr)
  }
 }
 validateemail(){
    //abc@g.mail.co.in
    const regexp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    if(this.formvalues.email===""){
        this.errorvalues.emailerr="*please enter valid email"
        this.showerrormsg(6,this.errorvalues.emailerr)
    }else if(!(regexp.test(this.formvalues.email))){
        this.errorvalues.emailerr="*invalid email"
        this.showerrormsg(6,this.formvalues.emailerr)
    }else{
        this.errorvalues.emailerr="" 
        this.showsuccessmsg(6)
    }
 }
validatecontactnumber(){
    const contactnumber=/^\d{10} $/
    if(this.formvalues.contactNumber==="") { 
        this.errorvalues.phonenumbererr="*please enter your phonenumber"
        this.showerrormsg(7,this.errorvalues.contactnumbererr)
    } else if(contactnumber.test(this.formvalues.contactnumber)) 
    {  this.errorvalues.contactnumbererr=""
       this.showsuccessmsg(7)
    }else{
        this.errorvalues.contactnumbererr="*invalid phone number"
        this.showerrormsg(7,this.errorvalues.contactnumbererr)
    }
 }  
alertmsg(){
    const{firstname,lastname,department,username,password,confirmpassword,
    email,contactnumber}=this.errorvalues
    if(firstnameerr=== "" && lastnameerr=== "" &&departmenterr=== "" &&usernameerr=== "" &&
    passworderr===""&&confirmpassworderr===""&&emailerr===""&&contactnumbererr==="")
    {
        SVGFEDropShadowElement("registration successful","thankyou",+this.formvalues.firstname,"success").then(()=>
        {console.log(this.formvalues) 
        this.removeinputs()})
    }else{
        swal ("give valid inputs","click ok to continue","error")
    }
}
removeinputs(){
    const form_groups=document.getElementsByClassName('child')
    console.log(form_groups)
    Array.from(form_groups.foreach)
    (Element=>{
        Element.getelementbytagname
        ('input')[0].value=""
        Element.getelementbytagname('span')[0].textcontact=""
        Element.classlist.remove('success')
    })
}
}
constvalidateuserinputs=new formvalidation()
document.getElementByclassname('child')[0].addeventlistener('submit'),event=>{
    event.preventdefault()
    validateuserinputs.getinputs()
    validateuserinputs.validatefirstname()
    validateuserinputs.validatelastname()
    validateuserinputs.validateusername()
    validateuserinputs.validatepassword()
    validateuserinputs.validateconfirmpassword()
    validateuserinputs.validateemail()
    validateuserinputs.validatecontactnumber()
    validateuserinputs.alertmsg()
}
