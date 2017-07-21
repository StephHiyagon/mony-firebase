const Dashboard = (update)=>{
  const section=$('<div class="container"></div>');
  const dash=$('<div class=row><div class="col-md-6"><div class="row"><div class="col-md-6"><h2>Perfil Emprendedor</h2><img class="img-circle img-responsive" id="imgPerfil" /></div><div class="col-md-6 emprende"><p id="username">Nombre:</p><p id="usermail">Email:</p></div></div></div></div>');
  const financiamiento = $('<div class="row"><div class="col-md-6 board"><h4>Dashboard de financiamiento</h4><img class="img-responsive" src="assets/img/financia.png" /></div></div>');
  section.append(dash);

  console.log(stateUser.name);
  console.log(stateUser.email);
  section.append(financiamiento);
  setTimeout(function(){
    $('#username').append('<span>'+stateUser.name+'</span>');
    $('#usermail').append('<span>'+stateUser.email+'</span>');

    if(stateProfile.imagen!=null){
      $('#imgPerfil').attr("src",stateProfile.imagen)
    }else{
      $('#imgPerfil').attr("src","assets/img/lalo.jpg");
    }

  },15000);

  return section;
}
