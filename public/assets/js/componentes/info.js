const Home = (update) => {
    const container   = $('<div class="landing"></div>');
    const sectionHome = $(`<section class="home"></section>`);
    const title = $('<h1 class="text-center">Hacemos realidad tus sueños</h1>');
    const button = $('<button type="button" class="btn btn-default" id="register">Consigue inversión</button>');
    const sectionBeneficios = $('<section id="beneficios" class="beneficios"></section>');
    const sectionFunciones  = $('<section class="funciones container"></section>');

        button.on('click',()=>{
        console.log("asdsadas");
       state.screen = UserRegister; 
       update();
    });
    
    sectionFunciones.append(ComoFunciona());
    sectionBeneficios.append(Beneficios());
    
    sectionHome.append(title);
    sectionHome.append(button);
    container.append(sectionHome);
    container.append(sectionFunciones);
    container.append(sectionBeneficios);

    button.on('click', ()=>{
      state.screen = UserRegister;
      update();
      $('.navbar-nav').hide();
    });
    
    return container;
}
const ComoFunciona = _ => {
    const funcionamiento = $(`<h2 class="text-center">¿CÓMO FUNCIONA MONY?</h2>
                  <div class="row">
                      <div class="col-sx-12 col-md-4 container">
                            <img class="img-responsive" src="assets/img/paso1.png" alt="logo paso 1">
                            <h4 class="text-center">Define tus objetivos...</h4>
                            <p class="">Y la cantidad de inversión que necesita para ello.</p>
                            <p class="">Aquí sería adecuado colocar tu motivación, tu mayor sueño y qué es lo que buscas con tu proyecto. Con ello aseguras que muchos inversores se motiven a invertir apostando por tu proyecto.</p>
                        </div>       
                      <div class="col-xs-12 col-md-4">
                          <img class="img-responsive" src="assets/img/paso2.png" alt="logo paso 2">
                          <h4 class="text-center ">META...</h4>
                          <p class="">Llegar al 75% del monto definido en menos de un mes. Recuerda que esto dependerá que tan vendedor sea tu perfil.</p>
                        </div>
                     <div class="col-xs-12 col-md-4">
                          <img class="img-responsive" src="assets/img/paso3.png" alt="logo paso 3">
                          <h4 class="text-center">Interbank te financia...</h4>
                          <p class="">Si la inversión en tu proyecto llega al 75%, Interbank te financia el resto con una tasa preferencial.</p>
                        </div>
                      </div>
                  </div>`);

    return funcionamiento;
}

const Beneficios = _=>{
    const container   = $('<div class="beneficios"></div>');
    const divImage    = $('<div class="col-sx-12 col-md-6"></div>');
    const imagen      = $('<img class="img-responsive" src="assets/img/emprendedora.jpeg">');
    const informacion = $('<div class="col-sx-12 col-md-6"></div>');
    const titulo      = $('<h2 class="text-center">Los inversionistas podrán elegir cómo invertir en tu negocio</h2>');
    const divLista    = $('<div class="text-left beneficios__informacion"></div>');
    const lista1      = $('<div class="beneficios__informacion--display"><img class="img-responsive" src="assets/img/002-unchecked.png"><h6>Contribuyen sin recompensa.</h6></div>');
    const lista2      = $('<div class="beneficios__informacion--display"><img class="img-responsive" src="assets/img/002-unchecked.png"><h6>Invierten a cambio de productos o servicios de tu empresa.</h6></div>');
    const lista3      = $('<div class="beneficios__informacion--display"><img class="img-responsive" src="assets/img/001-interface.png"><h6">Invierten a cambio de acciones de tu empresa.</h6></div>');

    divImage.append(imagen);
    informacion.append(titulo);
    divLista.append(lista1);
    divLista.append(lista2);
    divLista.append(lista3);
    informacion.append(divLista);
    container.append(divImage);
    container.append(informacion);

    return container;
}