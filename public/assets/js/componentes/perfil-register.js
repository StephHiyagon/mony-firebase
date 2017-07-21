const perfilRegister = (update)=>{
    const progress = $('<ul class="estado-3pasos estado-login"><li class="paso-1 presente"><span>1</span><p></p></li><li class="paso-2"><span>2</span><p></p></li><li class="paso-3"><span>3</span><p></p></li></ul>');
    
    const perfil = $('<section id="perfil" class="container"></section>');
    const row = $('<div class="row"></div>');
    const dataPerfil = $('<div class="col-xs-12 col-md-6"></div>');
    const dataCompany = $('<div class="col-xs-12 col-md-6"></div>');
    
    const imgProf = $('<img src="">');
    const imgCompany = $('<img src="">');
    
    dataPerfil.append();
    
    row.append(dataPerfil);
    row.append(dataCompany);
    
    perfil.append(row);
    return perfil;
}


$('#save').on('click' , ()=>{
   db.ref('data').push({
    user :{
        token : stateUser.token,
        name : stateUser.name,
        email : stateUser.email,
        password : stateUser.password,
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
});