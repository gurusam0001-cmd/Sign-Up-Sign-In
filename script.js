const signUpBtn =document.querySelector('.signUpBtn');
const signInBtn =document.querySelector('.signInBtn');
const nameField =document.querySelector('.nameField');
const title =document.querySelector('.title');
const underline =document.querySelector('.underline');
const text =document.querySelector('.text');

signInBtn.addEventListener('click' ,()=>{
    nameField.style.maxHeight ='0';
    title.innerHTML ='Sign In';
    text.innerHTML ='Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
}); 

signUpBtn.addEventListener('click' ,()=>{
    nameField.style.maxHeight ='60px';
    title.innerHTML ='Sign Up';
    text.innerHTML ='Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)';
}); 