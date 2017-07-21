"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<div class="components"></div>');

    if(state.screen == null){
        section.append(Home( _ => render(root)));
    }
    else{
        console.log(state.screen);
        section.append(state.screen( _ => render(root)));
    };

    root.append(section);
};

var config = {
    apiKey: "AIzaSyBDrFEJyWV-J3R8eQWdwKqw_uIgrbCgfC8",
    authDomain: "monyapp-bf79c.firebaseapp.com",
    databaseURL: "https://monyapp-bf79c.firebaseio.com",
    projectId: "monyapp-bf79c",
    storageBucket: "",
    messagingSenderId: "516782594145"
  };

firebase.initializeApp(config);
var db = firebase.database();

const state = {
    screen : null,
    dataSunat:null
}

const stateUser = {
    name : null,
    email : null,
    token : null,
    pwd : null
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
});

$(window).scroll(function() {
	if ($(window).scrollTop() > 20 ){    
 		$('nav').addClass('show-bg');
    } else {
        $('nav').removeClass('show-bg');
 	};   	 
});
