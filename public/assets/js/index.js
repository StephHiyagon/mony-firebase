"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');

    if(state.screen == null){
        section.append(UserRegister( _ => render(root)));
    }else{
        section.append(state.screen( _ => render(root)));
    };

    root.append(section);
};

var db = firebase.database();

const state = {
    screen : null
}

const stateUser = {
    token : null,
    name : null,
    email : null,
}

const stateCompany = {
    ruc : null,
    razonsocial : null,
	image : null,
    estado : null,
    tipo : null,
    direction : null
}

const stateProfile = {
    monto : null,
    description : null,
    image : null,
    rubro :null,
    recompensa :{
        producto : false,
        acciones : false
    }
}


$( _=>{
    const root =$('#root');
    render(root);
})
