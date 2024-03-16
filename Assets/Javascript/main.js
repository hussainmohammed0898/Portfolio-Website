AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
 
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//Form validation Starts
function validateName(){
  let nameError = document.getElementById('name-error')
  let name = document.getElementById('name')
 
  if(name.value.trim()==' '){
    nameError.innerHTML = "Name cannot be blank!!";
    return false;
  }else if(name.value.length <= 3){
    name.style.border = "1px solid Red";
    nameError.innerHTML = "Invalid name";
    return false;
  }else{
    nameError.innerHTML = '';
    name.style.border = "1px solid #e0f780";
    return true;
  }

}

function validatePhoneNumber(){
  let numberError = document.getElementById('number-error')
  let phoneNumber = document.getElementById('phone-number')
  let regExp = /^(0|91)?[6-9][0-9]{9}$/;

 if(phoneNumber.value.trim()== ' '){
    numberError.innerHTML = "Phone Number cannot be blank!!"
    return false;
 }else if(!phoneNumber.value.match(regExp)){
    numberError.innerHTML = "Please enter valid phone number";
    phoneNumber.style.border = "1px solid Red";
    return false;   
 }else{
    numberError.innerHTML = ' ';
    phoneNumber.style.border = "1px solid #e0f780";
    return true;
 }

}

function validateEmail (){
  let emailError = document.getElementById('email-error')
  let email = document.getElementById('email')
  let regExp =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if(email.value.trim() == ' '){
    emailError.innerHTML = "Email cannot be blank!!";
    return false;
  }else if(!email.value.match(regExp)){
     emailError.innerHTML = "Please enter valid email";
     email.style.border = "1px solid Red";
     return false;
  }else{
     emailError.innerHTML = ' ';
     email.style.border = "1px solid #e0f780";
     return true;
  }
}

function validateSubject(){
  let subject = document.getElementById("subject")
  let subjectError = document.getElementById('subject-error') 

  if(subject.value.trim() = ' '){
    subjectError.innerHTML = "Subject cannot be blank!!";
    subject.style.border = "1px solid Red";
    return false;
  }else{
    subjectError.innerHTML = ' ';
    subject.style.border = "1px solid #e0f780";
    return true;
  }
}

function validateMessage (){
  let messageError = document.getElementById('message-error')
  let message = document.getElementById('message')

  if(message.value.trim() == ' '){
    messageError.innerHTML = "Message cannot be blank!!";
    return false;
  }else if (message.value.length >= 300){
    messageError.innerHTML = "The maximum number of characters (300) has been exceeded"
    message.style.border = "1px solid Red";
  }else{
    messageError.innerHTML = ' ';
    message.style.border = "1px solid #e0f780";
    return true;
  }
}

function handleSubmit (){
  let submitError = document.getElementById('submit-error')
  let submit = document.getElementById('submit')
  if(!validateName() || !validatePhoneNumber() || !validateEmail() || !validateMessage()){
    submit.style.background = "Red"
    submitError.innerHTML = "Please resolve the errors";
    return false;
  }else{
    submitError.innerHTML = " ";
    submit.style.background = "#deff58"
    return true;
  }
}

//Form validation ends
