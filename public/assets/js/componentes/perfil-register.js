
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
