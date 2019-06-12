const drawAnimalesWishlist = () => {

    const card = document.querySelector('#animal-list');

    animales.forEach(animal => {
        const cardColumn = document.createElement("div");
        cardColumn.className = "col col-12 col-md-6 col-lg-4";
        card.appendChild(cardColumn);

        const cardLista = document.createElement("div");
        cardLista.className = "card cardLista";
        cardColumn.appendChild(cardLista);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardLista.appendChild(cardBody);

        const cardButtonimg = document.createElement("a");
        cardButtonimg.className = "";
        cardBody.appendChild(cardButtonimg);
        const cardWish = document.createElement("a");
        cardWish.className = "btn-block btn btn-outline-dark btnCerrarCard";
        cardWish.innerText="x";
        $(cardWish).on('click', () => {            
            animales.splice(animal,1);
        });
        cardButtonimg.appendChild(cardWish);        

        const cardImagen = document.createElement("img");
        cardImagen.className = "card-img-top";
        cardImagen.src = animal.foto;
        cardBody.appendChild(cardImagen);        

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = animal.nombre;
        cardBody.appendChild(cardTitle);

        const cardDescrip = document.createElement("p");
        cardDescrip.className = "card-text";
        cardDescrip.innerText = animal.descripcion;
        cardBody.appendChild(cardDescrip);

        const cardButton = document.createElement("a");
        cardButton.className = "btn btn-primary btn-block";
        cardButton.innerText = "Adoptar";
        cardButton.setAttribute('href', pageAnimal);
        cardBody.appendChild(cardButton);

    });
    anis = animales;
}




const start = () => {
    drawAnimalesWishlist();
}
start();