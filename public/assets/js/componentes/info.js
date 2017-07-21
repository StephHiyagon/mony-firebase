const Home = (update) => {
    const container   = $('<div class="landing"></div>');
    const sectionHome = $(`<section class="home">
        <h1 class="text-center">TE AYUDAMOS A HACER REALIDAD TU PROYECTO</h1>
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Consigue inversión</button>
        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>Recuerda...</h4>
                <p>Para poder registrarte en nuestra plataforma debes contar con una empresa establecida, también te recomendamos tener tus datos actualizados en la Sunat</p>
                <p>Para asegurarte puedes dirigirte al siguiente link:</p>
                 <a href="http://www.sunat.gob.pe/" target="_blank">www.sunat.gob.pe</a>
                <button type="button" class="btn btn-default btn-close" data-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
    </section>`);

    const sectionBeneficios = $('<section id="beneficios" class="beneficios"></section>');
    const sectionFunciones  = $('<section class="funciones"></section>');

    sectionFunciones.append(ComoFunciona());
    sectionBeneficios.append(Beneficios());

    container.append(sectionHome);
    container.append(sectionFunciones);
    container.append(sectionBeneficios);


    return container;
}
const ComoFunciona = _ => {
    const funcionamiento = $(`<h2 class="text-center">¿CÓMO FUNCIONA MONY?</h2>
             
                  <div class="row">
                      <div class="col-sx-12 col-md-4">
                            <img class="img-responsive" src="assets/img/paso1.png" alt="logo paso 1">
                            <h4 class="text-center">Define tus objetivos...</h4>
                            <p class="">Y la cantidad de inversión que necesita para ello.</p>
                            <p class="">Aquí sería adecuado colocar tu motivación, tu mayor sueño y qué es lo que buscas con tu proyecto. Con ello aseguras que muchos inversores se motiven a invertir apostando por tu proyecto.</p>
                        </div>       
                      <div class="col-xs-12 col-md-4">
                          <img class="img-responsive" src="assets/img/paso2.png" alt="logo paso 2">
                          <h4 class="text-center">META...</h4>
                          <p class="">Llegar al 75% del monto definido en menos de un mes. Recuerda que esto dependerá que tan vendedor sea tu perfil.</p>
                        </div>
                     <div class="col-xs-12 col-md-4">
                          <img class="img-responsive" src="assets/img/paso3.png" alt="logo paso 3">
                          <h4 class="">Interbank te financia...</h4>
                          <p class="">Si la inversión en tu proyecto llega al 75%, Interbank te financia el resto con una tasa preferencial.</p>
                        </div>
                      </div>
                  </div>`);

    return funcionamiento;
}

const Beneficios=_=>{
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


