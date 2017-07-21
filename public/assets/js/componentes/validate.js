const details = (container) => {
    container.empty();
    const divResponse = $('<div class="response"></div>');
    const messageValidate = $('<span class="text-danger"></span>');
    const btnSave = $('<button id="btnSave" class="btn btn-default save" type="submit">Guardar Datos</button>');

    if ((typeof data) === "string"){
        const message = $(`<span class="text-danger">${data}</span>`);
        divResponse.append(message);
    }else if(state.dataSunat.tipo_contribuyente !== "PERSONA NATURAL SIN NEGOCIO"){
        const ulData = $(`<ul class="list-group">
                                <li class="list-group-item">Ruc: ${state.dataSunat.ruc}</li>
                                <li class="list-group-item">Razon Social: ${state.dataSunat.razon_social}</li>
                                <li class="list-group-item">Estado Contribuyente: ${state.dataSunat.estado_contribuyente}</li>
                                <li class="list-group-item">Tipo de Contribuyente: ${state.dataSunat.tipo_contribuyente}</li>
                                <li class="list-group-item">Dirección: ${state.dataSunat.direccion}</li>
                          </ul>`);
        divResponse.append(ulData);
        divResponse.append(btnSave);
    }else {
          divResponse.empty();
          messageValidate.text('Lo sentimos, tu empresa debe tener un minimo de 1 año de funcionamiento');
          divResponse.append(messageValidate);
    }
    btnSave.on('click',() => {
      stateCompany.ruc = state.dataSunat.ruc;
      stateCompany.razonsocial = state.dataSunat.razon_social;
      stateCompany.estado = state.dataSunat.estado_contribuyente;
      stateCompany.tipo = state.dataSunat.tipo_contribuyente;
      stateCompany.direction = state.dataSunat.direccion;
        // state.screen = PerfilRegister;
        console.log("aki");
        db.ref('data').push({
            user :{
              name : stateUser.name,
              email : stateUser.email,
              password : stateUser.pwd
            },
            company : {
                ruc : stateCompany.ruc,
                razsocial : stateCompany.razonsocial,
        		image: stateCompany.image,
                econtribuyente : stateCompany.estado,
                tcontribuyente : stateCompany.tipo,
                direction : stateCompany.direction
            },
            perfil : {
                monto : stateProfile.monto,
                description : stateProfile.description,
                image : stateProfile.image,
                rubro : stateProfile.rubro,
                recompensa : {
                    producto :stateRecompensa.producto,
                    action : stateRecompensa.acciones
                }
            }
        });
    // update();
});

  container.append(divResponse);
};
const ValidateRuc = (update) => {
    const tecactusApi = new TecactusApi("mY0G17HwnfIhT4wNgVUUi6xLXIFFolndZYeher92");
    const container = $('<section class="container"></section>');
    const progressBar = $(`<div class="progress__register">
    <ul class="estado-3pasos estado-login">
        <li class="paso-1 presente"><span>1</span><p></p></li>
        <li class="paso-2 presente"><span>2</span><p></p></li>
        <li class="paso-3"><span>3</span><p></p></li>
        <li class="paso-4"><span>4</span><p></p></li>
    </ul>
  </div>`);
    const row = $('<div class="row"></div>');
    // const title =$(`<h4>Hola ${stateUser.name}</h4>`);
    const title =$(`<div class="col-xs-12 col-md-6 col-md-offset-3 text-center">
                      <h3>Hola Lalo, bienvenido a MONY</h3>
                      <p>Para poder ofrecerte la mejor experiencia posible, necesitamos saber algo más sobre tu empresa</p>
                    </div>`);

    const formContainer = $('<form action="" class="col-xs-12 col-md-6 col-md-offset-3 text-center"></form>');
    const formGroup = $('<div class="form-group"></div>');
    const inputRuc = $('<input id="ruc" type="text" class="form-control" maxlength="11" placeholder="Ingresa RUC de 11 dígitos">');
    const btnValidate = $('<button id="consultar" type="submit" class="btn btn-default">Validar</button>');
    const row1 = $('<div class="row"></div>');
    const validateContainer = $('<div class="col-xs-12 col-md-6 col-md-offset-3"></div>');
    const alert = $(`<span class="text-danger"></span>`);

    formGroup.append(inputRuc);
    formContainer.append(formGroup);
    formContainer.append(btnValidate);
    row.append(title);
    row.append(formContainer);
    container.append(progressBar);
    container.append(row);

    inputRuc.on('keydown',(e)=>{
        if( e.keyCode > 47 && e.keyCode < 58 ||  e.keyCode === 8){
            return true;
        }
    });
    btnValidate.on('click', (e) =>{
        e.preventDefault();
        console.log(inputRuc.val());
        if(inputRuc.val().trim().length === 11){
          tecactusApi.Sunat.getByRuc(inputRuc.val())
              .then(function (response) {
                  console.log("consulta correcta!");
                  console.log(response.data);
                  console.log(response.status);
                  state.dataSunat = response.data;
                  details(validateContainer);
              })
              .catch(function (response) {
                  console.log("algo ocurrió");
                  console.log("código de error: " + response.code);
                  console.log("mensaje de respuesta: " + response.status);
                  console.log(response.data);
              })
        }else {
            validateContainer.empty();
            alert.text("Debe especificar un número de RUC válido");
            validateContainer.append(alert);
        }
      });
      row1.append(validateContainer);
      container.append(row1);
    return container;
};
