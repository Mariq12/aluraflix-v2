var listaPeliculas = [];
var listaTrailers = [];
var listaNombresPeliculas = [];
var yearList = [];

function validarAnio(anio) {
  var regex = /^\d{4}$/;
  return regex.test(anio);
}

function validarURL(url) {
  var regex = /\.(jpeg|jpg|gif|png)$/i;
  return regex.test(url);
}

function agregarPelicula() {
  var nombrePelicula = document.getElementById('nombre').value;
  var anio = document.getElementById('year').value;
  var urlPelicula = document.getElementById('pelicula').value;
  var urlTrailer = document.getElementById('trailer').value;

  if (!validarAnio(anio)) {
    alert("Por favor ingresa un año válido de 4 dígitos.");
    return;
  }

  if (!validarURL(urlPelicula)) {
    alert("Por favor ingresa una URL de imagen válida (jpeg, jpg, gif, png).");
    return;
  }

  if (urlTrailer.includes("https://youtu.be/")) {
    alert("Por favor ingresa una URL de trailer válida.\n No agregar \"https://youtu.be/\"");
    return;
}


  document.getElementById('mensajeDeError').innerHTML = '';
  listaPeliculas.push(urlPelicula);
  listaTrailers.push(urlTrailer);
  listaNombresPeliculas.push(nombrePelicula);
  yearList.push(anio);

  limpiarCampos();
  recargarPeliculas();
}

    // Función para recargar las películas
    function recargarPeliculas() {
      var elementoListaPeliculas = document.getElementById('listaPeliculas');
      elementoListaPeliculas.innerHTML = '';
      
      for (var i = 0; i < listaPeliculas.length; i++) {
        
        var peliculaImagen = `
          <img src="${listaPeliculas[i]}" style="width: 30%;" onclick="mostrarTrailer('${listaTrailers[i]}')">
          <p>${listaNombresPeliculas[i]} <br> Año: ${yearList[i]}</p>
          <a href="#" onclick="mostrarTrailer('${listaTrailers[i]}')" style="color: white;">Ver trailer</a>
        `;
        elementoListaPeliculas.innerHTML += `
          <div>
        ${peliculaImagen}
        <div id="trailer${i}" style="display: none;">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${listaTrailers[i]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>`;
      }
    }

    function mostrarTrailer(trailerURL) {
      var trailers = document.querySelectorAll('[id^="trailer"]');
      trailers.forEach(trailer => {
        trailer.style.display = "none";
      });
      var index = listaTrailers.indexOf(trailerURL);
      document.getElementById("trailer" + index).style.display = "block";
    }

    function eliminarPelicula() {
      var nombreEliminar = document.getElementById("nombreEliminar").value;
      var index = listaNombresPeliculas.indexOf(nombreEliminar);
      if (index === -1) {
        window.alert("La película escrita no se encuentra en el catálogo");
      } else {
        listaPeliculas.splice(index, 1);
        listaTrailers.splice(index, 1);
        listaNombresPeliculas.splice(index, 1);
        yearList.splice(index, 1);
        recargarPeliculas();
      }
    }

    function limpiarCampos() {
      document.getElementById('nombre').value = '';
      document.getElementById('year').value = '';
      document.getElementById('pelicula').value = '';
      document.getElementById('trailer').value = '';
    }

// Ingresa los datos manualmente
var moviesList = [
  "https://images-0.rakuten.tv/storage/global-movie/translation/artwork/84fe0d46-9369-472b-9442-8e75a7ec6082-harry-potter-y-la-piedra-filosofal-1656585961.jpeg",
  "https://images-1.rakuten.tv/storage/global-movie/translation/artwork/70dd3e44-2160-4815-a460-dd24e71d4332-harry-potter-y-la-camara-secreta-1656586080.jpeg",
  "https://m.media-amazon.com/images/S/pv-target-images/d513984fb648e7dcff2fc41be4002b8fbc9f8c3f0bf0878db7c4abb532ecc1a6.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/a7e79947458f867291d8c528e22eb6836b651bba6f7ed987a28d3262c8e39d1f.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/361542f977ffdadb7863ce868cd4b1720f18c5a4e9657b60dff154e7647bfe87.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/3a8497f217c406c7b423e19c531d8a9342b99a5c61de17eb79d30447e0a3faef.jpg",
  "https://musicart.xboxlive.com/7/32e15000-0000-0000-0000-000000000002/504/image.jpg",
  "https://musicart.xboxlive.com/7/44e15000-0000-0000-0000-000000000002/504/image.jpg"
];

// Agregar un enlace para redireccionar
var redirectLinks = [
  "https://es.wikipedia.org/wiki/Harry_Potter_y_la_piedra_filosofal_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_la_c%C3%A1mara_secreta_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_el_prisionero_de_Azkaban_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_el_c%C3%A1liz_de_fuego_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_la_Orden_del_F%C3%A9nix_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_el_misterio_del_pr%C3%ADncipe_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_las_reliquias_de_la_Muerte:_parte_1",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_las_reliquias_de_la_Muerte:_parte_2",
  "https://www.example9.com"
];
//Agrega elementos a la lista usando .push
moviesList.push(
  "https://www.aceprensa.com/wp-content/uploads/2008/12/8966-0.jpg"
);
// Agregar los nombres de las películas abajo de las imágenes
var nameMovies = [
  "Harry Potter y la piedra filosofal",
  "Harry Potter y la cámara secreta",
  "Harry Potter y el prisionero de Azkaban ",
  "Harry Potter y el cáliz de fuego",
  "Harry Potter y la Orden del Fénix",
  "Harry Potter y el príncipe mestizo",
  "Harry Potter y las reliquias de la muerte: Parte 1",
  "Harry Potter y las reliquias de la muerte - Parte 2",
  "La saga Crepúsculo: Eclipse"
];
// Agrega el año debajo del nombre de cada pelicula
var year = [2001, 2002, 2004, 2005, 2007, 2009, 2010, 2011, 2011];

document.write('<div class="container_allMovies">');

//Desafío 1 - Convertir for en
//Desafío 2 Asegura que la imagen sea jpg o jpeg
var i = 0;
while (i < moviesList.length) {
  if (moviesList[i].endsWith("jpg") || moviesList[i].endsWith("jpeg")) {
    document.write('<div class="container_movies">');
    // Agregar enlace alrededor de la imagen
    document.write('<a href="' + redirectLinks[i] + '">');
    document.write("<img src=" + moviesList[i] + ">");
    document.write("</a>");
    document.write("<p>" + nameMovies[i] + "</p>");
    document.write("<p>Año: " + year[i] + "</p>");
    //Desafío 4 - Colocar títulos debajo de la imagen
    document.write("</div>");
  } else {
    document.write(
      "<p> La imagen " +
        i +
        " no se leyó porque no es un archivo jpeg o jpg </p>"
    );
  }
  i++;
}
document.write("</div>");

