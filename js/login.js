
document.addEventListener("click",function(e){
    const register = document.getElementById('register');
    const login = document.getElementById('login');

   if(e.target.classList.contains("register")){
    e.target.classList.add('selected');
    login.classList.remove('selected')
   }

   if(e.target.classList.contains("login")){
    e.target.classList.add('selected');
    register.classList.remove('selected')
   }
})