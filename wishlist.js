{/* <div class="col col-12 col-sm-4 col-md-4">
<div class="card-wishlist">
    <div class="card-body">
        <img src="assets/Logo-03.png" class="rounded-circle">
        <h3 class="card-titleWish">Doki</h3>
        <button type="button" class="btn btn-danger btn-outline-dark btnCerrarCard">x</button>
        <h5 class="card-text">21/04/2019</h5>
        <h5 class="card-titleWish">Bulldog Francés</h5>
        <hr />
        <hr />
        <h4 class="card-titleWish">Datos del Contacto</h4>
        <ul class="ulWishlist">
            <li>Luis Besil</li>
            <li>094 236 444</li>
            <li>l.besil@observador.com.uy</li>
        </ul>
        <hr />
        <button type="button" class="btn btn-success btn-block">Adoptar</button>
        <br />
    </div>
</div>
</div>
 */}
const drawAnimales = () => {
    const card = document.querySelector('#animal-list');
    wishi.forEach(animal => {
        const cardColumn = document.createElement("div");
        cardColumn.className = "col col-12 col-sm-4 col-md-4";
        card.appendChild(cardColumn);
        const cardLista = document.createElement("div");
        cardLista.className = "card-wishlist";
        cardColumn.appendChild(cardLista);
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardLista.appendChild(cardBody);
        const cardImagen = document.createElement("img");
        cardImagen.className = "rounded-circle";
        cardImagen.src = "assets/Logo-03.png";
        cardBody.appendChild(cardBody);      













        const cardButtonimg = document.createElement("a");
        cardButtonimg.className = "";
        cardButtonimg.setAttribute('href', pageWishlist);
        cardBody.appendChild(cardButtonimg);
        const cardWish = document.createElement("img");
        cardWish.className = "wish btn-block";
        cardWish.src = "assets/heart.png";
        $(cardWish).on('click', () => {
            wishi.push(animal);
        });
        cardButtonimg.appendChild(cardWish);        

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
    drawAnimales();
}
start();