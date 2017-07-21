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
                <button type="button" class="btn btn-default btn-close" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </section>`);

    const sectionBeneficios = $('<seccion id="beneficios" class="beneficios"></seccion>');
    const sectionFunciones  = $('<section></section>');

    container.append(seccionHome);
    sectionBeneficios.append(Beneficios());
    container.append(sectionBeneficios);
    sectionFunciones.append(ComoFunciona());

    return container;
}

const Beneficios=_=>{
    const container   = $('<div class="beneficios"></div>');
    const divImage    = $('<div class="col-sx-12 col-md-6"></div>');
    const imagen      = $('<img class="img-responsive" src="assets/img/emprendedora.jpeg">');
    const informacion = $('<div class="col-sx-12 col-md-6"></div>');
    const titulo      = $('<h3 class="text-center">Los inversionistas podrán elegir cómo invertir en tu negocio</h3>');
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

const ComoFunciona = () => {
    const funcionamiento = $(`<section id="como-funciona">
        <h1>¿CÓMO FUNCIONA?</h1>
        <div class="paso1">Define tu objetivo y cuánto dinero necesitas para lograrlo</div>
        <span class="glyphicons glyphicons-fees-payments"></span>
    </section>`);

    return funcionamiento;
}

