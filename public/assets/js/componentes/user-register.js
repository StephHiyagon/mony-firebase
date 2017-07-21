const UserRegister = (update)=>{
  console.log("registrate ahora ya!!!");
  const form=$('<form action="#" class="register-card-div"></form>');
  const panel1=$('<div class="panel panel-default" ></div>');
  const panel2=$('<div class="panel-heading"></div>');
  const row0=$('<div class="row "></div>');
  const row1=$('<div class="row "></div>');
  const row2=$('<div class="row "></div>');
  const row3=$('<div class="row "></div>');
  const row4=$('<div class="row "></div>');
  const row5=$('<div class="row "></div>');
  const row6=$('<div class="row "></div>');
  const row7=$('<div class="row "></div>');
  const divI0=$('<div class="col-md-6 col-md-offset-3 form-group"></div>');
  const divI1=$('<div class="col-md-6 col-md-offset-3 form-group"></div>');
  const divI2=$('<div class="col-md-6 col-md-offset-3 form-group"></div>');
  const divI3=$('<div class="col-md-6 col-md-offset-3 form-group"></div>');
  const divI4=$('<div class="col-md-6 col-md-offset-3 form-group"></div>');
  const divI5=$('<div class="col-md-6 col-md-offset-3 form-group text-center"></div>');
  const divI6=$('<div class="col-md-6 col-md-offset-3 form-group text-center"></div>');
  const divI7=$('<div class="col-md-6 col-md-offset-3 form-group text-center"></div>');
  const name=$('<input type="text" class="form-control" placeholder="Nombre" id="name"/>');
  const email=$('<input type="text" class="form-control" placeholder="Correo" id="mail"/>');
  const pass=$('<input type="password" class="form-control" placeholder="Contraseña" id="password"/>');
  const h2=$('<h2>Registarse</h2>');
  const text=$('<p>Al registrarse acepta los términos y condiciones</p>');
  // const login=$('<button class="btn btn-default" type="submit" id="login">Ingresa</button>');
  const signup=$('<button class="btn btn-default btn-lg" type="submit" id="signup">Crear cuenta</button>');
  // const close=$('<button class="btn btn-default" type="submit" id="cerrar">LogOut</button>');
  const btnG=$('<button class="btn btn-danger btn-lg" type="submit" id="btn-google"><span class="icon-google-plus"></span> Entrar con Google + </button>');//falta icono
  const btnF=$('<button class="btn btn-primary btn-lg" type="submit" id="btn-facebook"><span class="icon-facebook"></span> Entrar con Facebook</button>');

  form.append(panel1);
	panel1.append(panel2);
  panel2.append(row0);
  row0.append(divI0);
  divI0.append(h2);
  panel2.append(row1);
  row1.append(divI1);
  divI1.append(name);
  panel2.append(row2);
  row2.append(divI2);
  divI2.append(email);
  panel2.append(row3);
  row3.append(divI3);
  divI3.append(pass);
  panel2.append(row4);
  row4.append(divI4);
  divI4.append(text);
  panel2.append(row5);
  row5.append(divI5);
  divI5.append(signup);
  panel2.append(row6);
  row6.append(divI6);
  divI6.append(btnF);
  panel2.append(row7);
  row7.append(divI7);
  divI7.append(btnG);
// login.on('click', e =>{
//    const email = $('#mail').val();
//    const password = $('#password').val();
//    const auth = firebase.auth();
//    stateUser.name=$('#name').val();
//    stateUser.email=email;
//    console.log(stateUser.name);
//    console.log(stateUser.email);
//    const promise = auth.signInWithEmailAndPassword(email,password);
//
//    promise.catch(e => console.log(e.message)
//
//
//  );
// });

function letras(e){
  var key=e.keyCode;
  console.log(key);
  var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var letras=" abcdefghijklmnopqrstuvwxyz";
  var especiales="8-37-38-46-164";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
      teclado_especial=true;
      break;
    }
  }
  if(letras.indexOf(teclado)==-1 && !teclado_especial){
    return false;
  }
}

name.on('keypress', letras);

function correo(event){
  var correo=$('#mail').val();
  console.log(correo);
  if(!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo)) || correo==""){
    console.log("No es correcto");
    console.log(event.target);
    $(event.target).css("border","2px solid red");
  }else{
    console.log("Es correcto");
    $(event.target).css("border","2px solid green");
  }
}

email.on('blur', correo);

function valida(event){
  console.log("entro validar");
  console.log(this);
  if($(this).val()==""){
    $(this).css("border","2px solid red");
  }else{
    $(this).css("border","2px solid green");
  }

  if(this.getAttribute("type")=="text"){
      var txt="";
      var separa=$(this).val().split(" ");
      console.log(separa);
    	separa.forEach(function(e){
        return txt = txt + e.charAt(0).toUpperCase() + e.slice(1) + " ";});
      var imp=txt.trim();
      console.log(imp);
    	return $(this).val()=imp;
    }
}


  name.on('blur',valida);


signup.on('click', e =>{
   const email = $('#mail').val();
   const password = $('#password').val();
   const auth = firebase.auth();
  stateUser.name=$('#name').val();
  stateUser.email=email;
  console.log(stateUser.name);
  console.log(stateUser.email);
   const promise = auth.createUserWithEmailAndPassword(email, password);

   promise.catch(e => console.log(e.message));
});


// close.on('click', e =>{
//    firebase.auth().signOut();
// });

//Add user with password and email
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
    }else{
        console.log('not login in');
    }
});

  btnG.on('click', function(){
    var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  firebase.auth().signInWithPopup(provider)
  .then(function(result){
    var user = result.user;
    stateUser.name=user.displayName;
    stateUser.email=user.email;
    stateProfile.imagen=user.photoURL;
    console.log("el usuario es" + user.displayName)
    console.log(user);
    console.log(stateUser.email);
  })
  .catch(function(err){
    console.log("hubo un error" + err)
  })
  })

  btnF.on('click',function(){
    var provider = new firebase.auth.FacebookAuthProvider();
  //  provider.addScope('user_birthday');
    provider.addScope('public_profile');
   firebase.auth().signInWithPopup(provider).then(function(result) {
	    console.log(result.user);

      stateUser.name =result.user.displayName;
      stateUser.email=result.user.email;
      stateProfile.imagen=result.user.photoURL;
      console.log(stateUser.name);
      console.log(stateUser.email);
    }).catch(function(error) {
	    console.log(error);
  });
  })

  return form;
}
