const Home = (update) => {
    const homeContainer = $(`<section class="home">
        <h1>TE AYUDAMOS A HACER REALIDAD TU PROYECTO</h1>
        <button type="button" class="btn btn-default">Consigue inversión</button>
    </section>`);
   const section= $('<<section></section>');
   
   section.append(ComoFunciona());
 

    //update();

    return homeContainer;
}

const ComoFunciona = () => {
    const funcionamiento = $(`<section id="como-funciona">
        <h1>¿CÓMO FUNCIONA?</h1>
        <div class="paso1">Define tu objetivo y cuánto dinero necesitas para lograrlo</div>
        <span class="glyphicons glyphicons-fees-payments"></span>
    </section>`);
   // state.screen = UserRegister;
    //update();

    return funcionamiento;
}