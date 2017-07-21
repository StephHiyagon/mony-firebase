const Dashboard = (update)=>{
  const section=$('<div class="container"></div>');
  const row=$('<div class=row><div class="row">');
  const dash=$('<div class="col-md-6"><h2>Perfil Emprendedor</h2><img class="img-circle img-responsive circulo" id="imgPerfil" /></div>');
  const datos=$('<div class="col-md-6 emprende"><p id="username">Nombre:</p><p id="usermail">Email:</p></div>');
  const financiamiento = $('<div class="row"><div class="col-md-6 board"><h4>Dashboard de financiamiento</h4><img class="img-responsive" src="assets/img/financia.png" /></div></div>');
  const companyContainer = $(`<div class="col-xs-12 col-md-6"></div>`);
   const thumbnail = $(`<div class="thumbnail"></div>`);
   const imgCompany = $(`<img src="${stateCompany.image}" alt="Imagen de emprendedor">`);

   const divCaption = $(`<div class="caption">
                           <h3>Thumbnail label</h3>
                           <p>Ruc: ${stateCompany.ruc}</p>
                           <p>Descripción: ${stateCompany.description}</p>
                         </div>`);
  const mapa=$('<div id="map"></div>');
  section.append(row);
  row.append(dash);
  thumbnail.append(imgCompany);
  thumbnail.append(divCaption);
  companyContainer.append(thumbnail);
  row.append(companyContainer);
  row.append(datos);
  section.append(financiamiento);


  console.log(stateUser.name);
  console.log(stateUser.email);

  setTimeout(function(){
    $('#username').append('<span>'+stateUser.name+'</span>');
    $('#usermail').append('<span>'+stateUser.email+'</span>');

    if(stateProfile.imagen!=null){
      $('#imgPerfil').attr("src",stateProfile.imagen)
    }else{
      $('#imgPerfil').attr("src","assets/img/lalo.jpg");
    }

  },15000);

  // function initMap() {
  //   var laboratoriaLima = {lat: -12.1191427, lng: -77.0349046};
  //   var map = new google.maps.Map(document.getElementById("map"),{
  //     zoom: 5,
  //     center: laboratoriaLima
  //   });
  //
  //   var marcadorLaboratoria = new google.maps.Marker({
  //     position: laboratoriaLima,
  //     map: map
  //   });
  // }
  //
  // initMap();

  return section;
}
