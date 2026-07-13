import { obtenerVideos } from "./api.js";
import { mostrarVideos } from "./videos.js";
import { filtrarVideos } from "./categorias.js";
import { inicializarBuscador } from "./buscar.js";
let videosGlobal = [];

const contenedor =
    document.getElementById("videosContainer");

async function iniciar() {

    videosGlobal = await obtenerVideos();

    mostrarVideos(
        videosGlobal,
        contenedor
    );

    inicializarBuscador(videosGlobal);

}

document
    .querySelectorAll(".superior__item, .menu-filtro")
    .forEach(boton => {

        boton.addEventListener("click", e => {

            e.preventDefault();

            const videosFiltrados =
                filtrarVideos(
                    videosGlobal,
                    boton.dataset.categoria
                );

            mostrarVideos(
                videosFiltrados,
                contenedor
            );

        });

    });

iniciar();