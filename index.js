const whish = "animal.html";
let anis = [];

const animales = [{
        foto: "assets/cat_01.jpg",
        tipo: "cat",
        nombre: "Penelope",
        barrio: "Centro",
        raza: "Persa",
        sexo: "M",
        edad: "2",
        pelo: "Beige",
        ojos: "Gris",
        descripcion: "Some quicktitle and make up the bulk of the card's content.",
        contacto: "Juan Carlos - 094 236 444 - aca@aca.com"
    },
    {
        foto: "assets/dog_01.jpg",
        tipo: "dog",
        nombre: "Max",
        barrio: "cordón",
        raza: "Foster",
        sexo: "M",
        edad: "1",
        pelo: "marrón",
        ojos: "negros",
        descripcion: "Some quicktitle and make up the bulk of the card's content.",
        contacto: "Juan Carlos - 094 236 444 - aca@aca.com"
    },
    {
        foto: "assets/dog_02.jpg",
        tipo: "dog",
        nombre: "Dante",
        barrio: "Pocitos",
        raza: "Caniche",
        sexo: "H",
        edad: "2",
        pelo: "Blanco",
        ojos: "Celestes",
        descripcion: "Sasfo asdfsd wrgwer afme quicktitle and make up the bulk of the card's content.",
        contacto: "Juan Carlos - 095 342 666 - ahi@aca.com"
    },
    {
        foto: "assets/dog_08.jpg",
        tipo: "dog",
        nombre: "Dante",
        barrio: "Pocitos",
        raza: "Caniche",
        sexo: "H",
        edad: "2",
        pelo: "Blanco",
        ojos: "Celestes",
        descripcion: "Sasfo asdfsd wrgwer afme quicktitle and make up the bulk of the card's content.",
        contacto: "Juan Carlos - 095 342 666 - ahi@aca.com"
    },
    {
        foto: "assets/dog_09.jpg",
        tipo: "dog",
        nombre: "Dante",
        barrio: "Pocitos",
        raza: "Caniche",
        sexo: "H",
        edad: "2",
        pelo: "Blanco",
        ojos: "Celestes",
        descripcion: "Sasfo asdfsd wrgwer afme quicktitle and make up the bulk of the card's content.",
        contacto: "Juan Carlos - 095 342 666 - ahi@aca.com"
    },
    {
        foto: "assets/dog_10.jpg",
        tipo: "dog",
        nombre: "Dante",
        barrio: "Pocitos",
        raza: "Caniche",
        sexo: "H",
        edad: "2",
        pelo: "Blanco",
        ojos: "Celestes",
        descripcion: "Sasfo asdfsd wrgwer afme quicktitle and make up the bulk of the card's content.",
        contacto: "Juan Carlos - 095 342 666 - ahi@aca.com"
    },
    {
        foto: "assets/dog_11.jpg",
        tipo: "dog",
        nombre: "Dante",
        barrio: "Pocitos",
        raza: "Caniche",
        sexo: "H",
        edad: "2",
        pelo: "Blanco",
        ojos: "Celestes",
        descripcion: "Sasfo asdfsd wrgwer afme quicktitle and make up the bulk of the card's content.",
        contacto: "Juan Carlos - 095 342 666 - ahi@aca.com"
    }
];
/* $('document').ready(function() {

    $('#tipo').on("change", () => {
        $("#animal-list").empty();
        anis = animales.filter(animal => animal.tipo == $('#tipo option:selected', this).val());
        drawAnimales();
    });


}); */

/* $('#serch-filter').on('change', function() {
        $("#animal-list").empty();
        var fTipo = $('#tipo option:selected', this).text();
    
        console.log(fTipo);
        if (fTipo != "") {
            anis = animales.filter(animal => animal.tipo == fTipo);
        } else {
            anis = animales;
        };
        drawAnimales();
    }); */

/* $('#nombre').on('keyup', function() {
    $("#animal-list").empty();

    fNombre = $('#nombre').val();

    console.log(fNombre);


    if (fNombre != "") {
        anis = animales.filter(animal => animal.nombre == fNombre);
    } else {
        anis = animales;
    };

    drawAnimales();

});
 */



const drawFiltros = () => {

    const filtro = document.querySelector('#filtro');

    const tituloFiltro = document.createElement("h4");
    tituloFiltro.className = "h4";
    tituloFiltro.innerText = "Filtros";
    filtro.appendChild(tituloFiltro);


    /* TIPO */
    filtro.appendChild(document.createElement("br"));
    const tituloTipo = document.createElement("h6");
    tituloTipo.className = "h6";
    tituloTipo.innerText = "Tipo";
    filtro.appendChild(tituloTipo);
    const selectTipo = document.createElement("select");
    selectTipo.className = "custom-select custom-select-md";
    selectTipo.id = "tipo";
    selectTipo.append(new Option("Perros", "dog"));
    selectTipo.append(new Option("Gatos", "cat"));
    filtro.appendChild(selectTipo);
    filtro.appendChild(document.createElement("br"));
    filtro.appendChild(document.createElement("br"));

    /* NOMBRE */
    const tituloNombre = document.createElement("h6");
    tituloNombre.className = "h6";
    tituloNombre.innerText = "Nombre";
    filtro.appendChild(tituloNombre);
    const fNombre = document.createElement("input");
    fNombre.className = "form-control";
    fNombre.id = "nombre";

    $('#filtro').on('change', function() {
        $('#nombre').on('keyup', function() {
            $("#animal-list").empty();
            console.log("llegue ca");

            if ($('#nombre').val() != "") {
                anis = animales.filter(animal => animal.nombre == $('#nombre').val());
            } else {
                anis = animales;
            };
            drawAnimales();
        });
    });
    fNombre.innerText = "";
    filtro.appendChild(fNombre);
    filtro.appendChild(document.createElement("br"));

    /* BARRIO */
    const tituloBarrio = document.createElement("h6");
    tituloBarrio.className = "h6";
    tituloBarrio.innerText = "Barrio";
    filtro.appendChild(tituloBarrio);
    const fBarrio = document.createElement("input");
    fBarrio.className = "form-control";
    fBarrio.id = "barrio";
    fBarrio.innerText = "";
    filtro.appendChild(fBarrio);
    filtro.appendChild(document.createElement("br"));

    /* RAZA */
    const tituloRaza = document.createElement("h6");
    tituloRaza.className = "h6";
    tituloRaza.innerText = "Raza";
    filtro.appendChild(tituloRaza);
    const fRaza = document.createElement("input");
    fRaza.className = "form-control";
    fRaza.id = "raza";
    fRaza.innerText = "";
    filtro.appendChild(fRaza);

    /* SEXO */
    filtro.appendChild(document.createElement("br"));
    const tituloSexo = document.createElement("h6");
    tituloSexo.className = "h6";
    tituloSexo.innerText = "Sexo";
    filtro.appendChild(tituloSexo);
    const selectSexo = document.createElement("select");
    selectSexo.className = "custom-select custom-select-md";
    selectSexo.id = "sexo";
    selectSexo.append(new Option("Macho", "M"));
    selectSexo.append(new Option("Hembra", "H"));
    filtro.appendChild(selectSexo);
    filtro.appendChild(document.createElement("br"));
    filtro.appendChild(document.createElement("br"));

    /* EDAD */
    const tituloEdad = document.createElement("h6");
    tituloEdad.className = "h6";
    tituloEdad.innerText = "Edad";
    filtro.appendChild(tituloEdad);
    const fEdad = document.createElement("input");
    fEdad.className = "form-control";
    fEdad.id = "edad";
    fEdad.innerText = "";
    filtro.appendChild(fEdad);
    filtro.appendChild(document.createElement("br"));

    /* PELO */
    const tituloPelo = document.createElement("h6");
    tituloPelo.className = "h6";
    tituloPelo.innerText = "Pelo";
    filtro.appendChild(tituloPelo);
    const fPelo = document.createElement("input");
    fPelo.className = "form-control";
    fPelo.id = "pelo";
    fPelo.innerText = "";
    filtro.appendChild(fPelo);
    filtro.appendChild(document.createElement("br"));

    /* OJOS */
    const tituloOjos = document.createElement("h6");
    tituloOjos.className = "h6";
    tituloOjos.innerText = "Ojos";
    filtro.appendChild(tituloOjos);
    const fOjos = document.createElement("input");
    fOjos.className = "form-control";
    fOjos.id = "ojos";
    fOjos.innerText = "";
    filtro.appendChild(fOjos);

}


const drawAnimales = () => {

    const card = document.querySelector('#animal-list');

    anis.forEach(animal => {
        const cardColumn = document.createElement("div");
        cardColumn.className = "col col-12 col-md-6 col-lg-4";
        card.appendChild(cardColumn);

        const cardLista = document.createElement("div");
        cardLista.className = "card cardLista";
        cardColumn.appendChild(cardLista);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardLista.appendChild(cardBody);

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
        cardButton.setAttribute('href', whish);
        cardBody.appendChild(cardButton);

    });

}



const start = () => {
    /* drawPerros();
    drawGatos(); */
    drawFiltros();
}

start();