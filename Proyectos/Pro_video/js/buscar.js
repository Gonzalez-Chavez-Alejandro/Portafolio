import { mostrarVideos } from "./videos.js";

export function inicializarBuscador(videosGlobal) {

    const buscador = document.getElementById("buscar");

    buscador.addEventListener("input", () => {

        const texto = buscador.value.toLowerCase();

        const videosFiltrados = videosGlobal.filter(video =>
            video.titulo.toLowerCase().includes(texto)
        );

        mostrarVideos(
            videosFiltrados,
            document.getElementById("videosContainer")
        );

    });

}