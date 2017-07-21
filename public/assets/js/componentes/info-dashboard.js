const Dashboard = () =>{
    const companyContainer = $(`<div class="col-xs-12 col-md-6"></div>`);
    const thumbnail = $(`<div class="thumbnail"></div>`);
    const imgCompany = $(`<img src="${stateCompany.image}" alt="Imagen de emprendedor">`);

    const divCaption = $(`<div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>Ruc: </p>
                            <p>Descripción: </p>
                          </div>`);
    thumbnail.append(imgCompany);
    thumbnail.append(divCaption);
    companyContainer.append(thumbnail);
    return companyContainer;
};