const details = (container, data) => {
    container.empty();
    const divResponse = $('<div class="response"></div>');
    const messageValidate = $('<span class="text-danger"></span>');
    const btnSave = $('<button id="btnSend" type="submit">Guardar Datos</button>');

    if ((typeof data) === "string"){
        const message = $(`<span class="text-danger">${data}</span>`);
        divResponse.append(message);
    }else if(state.dataSunat.tipo_contribuyente !== "PERSONA NATURAL SIN NEGOCIO"){
        const ulData = $(`<ul>
                                <li>Ruc: ${state.dataSunat.ruc}</li>
                                <li>Razon Social: ${state.dataSunat.razon_social}</li>
                                <li>Estado Contribuyente: ${state.dataSunat.estado_contribuyente}</li>
                                <li>Tipo de Contribuyente: ${state.dataSunat.tipo_contribuyente}</li>
                                <li>Dirección: ${state.dataSunat.direccion}</li>
                          </ul>`);
        divResponse.append(ulData);
        divResponse.append(btnSave);
    }else {
          divResponse.empty();
          messageValidate.text('Lo sentimos, tu empresa debe tener un minimo de 1 año de funcionamiento');
          divResponse.append(messageValidate);
    }
    btnSave.on('click',() => {
        // state.screen = PerfilRegister;
        console.log("aki");
    // update();
});

  container.append(divResponse);
};
const ValidateRuc = (update) => {
    const container = $('<section class="container"></section>');
    const row = $('<div class="row"></div>');
    // const title =$(`<h4>Hola ${stateUser.name}</h4>`);
    const title =$(`<div class="col-xs-12 col-md-6 col-md-offset-3 text-center">
                      <h3>Hola Lalo, bienvenido a MONY</h3>
                      <p>Para poder ofrecerte la mejor experiencia posible, necesitamos saber algo más sobre tu empresa</p>
                    </div>`);

    const formContainer = $('<form action="" class="col-xs-12 col-md-6 col-md-offset-3"></form>');
    const formGroup = $('<div class="form-group"></div>');
    const inputRuc = $('<input id="ruc" type="number" class="form-control" placeholder="Ingresa RUC de 11 dígitos">');
    const btnValidate = $('<input id="consultar" type="submit" class="btn btn-default" value="Consultar">');
    const validateContainer = $('<div class="col-xs-12 col-md-6 col-md-offset-3"></div>');
    const alert = $(`<span class="text-danger"></span>`);

    formGroup.append(inputRuc);
    formGroup.append(btnValidate);
    formContainer.append(formGroup);
    container.append(row);
    container.append(title);
    container.append(formContainer);
    const tecactusApi = new TecactusApi("dTBvBWAG9zNqDaIdYUPaPxirTypgikwWEvUVDJqT");
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
                  details(validateContainer,state.dataSunat);
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
      container.append(validateContainer);
    return container;
};
