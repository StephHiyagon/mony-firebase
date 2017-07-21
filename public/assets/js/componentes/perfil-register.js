const PerfilRegister = (update)=>{    
    const perfil = $('<section id="perfil" class="container"></section>');
    const row = $('<div class="row"></div>');
    const dataPerfil = $('<div class="col-xs-12 col-md-6"></div>');
    const dataCompany = $('<div class="col-xs-12 col-md-6"></div>');
    
    const userInfo = $('<div class="info"><h3>'+stateUser.name+'</h3><br><h5>'+stateUser.email+'</h5></div>');
    const userCompany = $('<div class="info"><h3>'+stateCompany.razonsocial+'</h3><br><h5>'+stateCompany.ruc+'</h5></div>');
    
    const user = $('<div id="iprofile"><img src="" id="imagenprofile"></div>');
    const company = $('<div id="icompany"><img src="" id="imagencompany"></div>');
    
    const contain = $('<div class="contain"></div>');
    const title = $('<h3>¿Cuánto financiamiento necesitas?</h3>');
    const monto = $('<input type="text" id="monto" class="form-control" placeholder="S/.">');
    const title2 = $('<h3>¿Cuál es tu motivo?</h3>');
    const motivo = $('<textarea name="name" rows="8" cols="80" class="form-control"></textarea>'); 
    
    const sector = $('<input type="text" id="sector" class="form-control" placeholder="Sector al que pertenece tu empresa">');
    
    const recompensas = $('<div class="recompensas"></div>');
    const recom_opc1 = $('<input type="checkbox" class="recom" value="prod"><span>Productos a cambio</span><br>');
    const recom_opc2 = $('<input type="checkbox" class="recom" value="accion"><span>Acciones a cambio.</span>');
    
    const direction = $('<input type="text" id="direction" placeholder="Ingresa tu dirección">');
    
    const save = $('<input type="submit" value="save" class="save btn">');
        
    user.append(userInfo);
    company.append(userCompany);
    
    dataPerfil.append(user);
    dataPerfil.append(company);
    
    recompensas.append(recom_opc1);
    recompensas.append(recom_opc2);
    
    contain.append(title);
    contain.append(monto);
    contain.append(title2);
    contain.append(motivo);
    contain.append(sector);
    contain.append(recompensas);
    contain.append(save);
    
    dataCompany.append(contain);
    row.append(dataPerfil);
    row.append(dataCompany);
    perfil.append(row);
    
    save.on('click', (e)=>{
        e.preventDefault();
        
        if(recom_opc1.is(':checked')){
           stateProfile.recompensa.producto = true;
        }
        if(recom_opc2.is(':checked')){
           stateProfile.recompensa.acciones = true;
        }
        
        stateProfile.monto = monto.val();
        stateProfile.description = motivo.val();
        stateProfile.rubro = sector.val();
        stateCompany.direction = direction.val();
        
        db.ref('data').push({
        user :{
            token : stateUser.token,
            name : stateUser.name,
            email : stateUser.email,
            password : stateUser.pwd,
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
                    producto :stateProfile.recompensa.producto,
                    action : stateProfile.recompensa.acciones
                }
            }
          }   
       });         
        state.screen = Dashboard;
        update();
    });
    return perfil;
}

$(function() {
  $('#iprofile').click(function(event) {
      console.log("aksjdkasjdksakd");
       addImage(event); 
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;
    
      if (!file.type.match(imageType))
       return;
  
      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }
  
     function fileOnload(e) {
      var result=e.target.result;
      $('#iProfile').attr("src",result);
     }
});
    