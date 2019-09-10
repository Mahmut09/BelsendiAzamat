 function valid (form) {
     var name = form.name.value;
     var password = form.password.value;
     var RePassword = form.RePassword.value;

     let error =  document.getElementById('error');
     let errorPass =  document.getElementById('errorPass');
     let errorRePass =  document.getElementById('errorRePass');
    
     if (name == "" || name == " ")
     error.innerHTML = 'Вы не ввели логин!' 
   else
     if (password == "") 
     errorPass.innerHTML = 'Вы не ввели пароль!'
   else{
    errorPass.innerHTML = ''
   }
     if (RePassword == "") 
     errorRePass.innerHTML = 'Подтвердите пароль!'
   else{
    errorRePass.innerHTML = ""
   }
     if (password !== RePassword) 
     errorRePass.innerHTML = 'Пароли не совпадают!'
    else{
      errorRePass.innerHTML = ""
    }
    }

    function Revalid (form) {
      var name = form.name.value;
      var password = form.password.value;
      var RePassword = form.RePassword.value;
 
      let error1 =  document.getElementById('error');
      let errorPass1 =  document.getElementById('errorPass');
      let errorRePass1 =  document.getElementById('errorRePass');
     
      if (name !== "" || name == " ")
      error1.innerHTML = '' 
    else{}
     }

  function gears (form) {
    var fail = false;
    var name = form.name.value;
    var password = form.password.value;
    var RePassword = form.RePassword.value;

    let gear1 =  document.getElementById('gear1');
    let gear2 =  document.getElementById('gear2');

     if (name !== "" && password !== "" && RePassword !== "" && RePassword == password){
      gear1.style.transform = 'rotateZ(360deg)'
      gear1.style.background = ''
      gear2.style.transform = 'rotateZ(-360deg)'
      gear2.style.background = ''
     }
  }
  function greenInp (form) {
    var fail = false;
    var name = form.name.value;
    var password = form.password.value;
    var RePassword = form.RePassword.value;

    let name2 =  document.getElementById('name');
    let password2 =  document.getElementById('password');
    let RePassword2 =  document.getElementById('RePassword');
    let btn = document.getElementById('btn');

     if (name !== "" && password !== "" && RePassword !== "" && RePassword == password){
      name2.style.background = 'green'
      password2.style.background = 'green'
      RePassword2.style.background = 'green'
      btn.style.background = 'green'
      btn.style.color = 'black'
     }
  }

   
window.onload = function() {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
}