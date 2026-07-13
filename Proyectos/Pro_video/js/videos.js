export function mostrarVideos(videos, contenedor) {

    contenedor.innerHTML = "";

    videos.forEach(video => {

        contenedor.innerHTML += `
            <li class="videos__item">

                <iframe
                    width="100%"
                    height="72%"
                    src="${video.url}"
                    title="${video.titulo}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>

                <div class="descripcion-video">

                    <img
                        src="${video.imagen}"
                        alt="${video.canal}"
                    >

                    <div class="detalles__video">

                        <h3>
                            ${video.favorito ? "⭐" : ""}
                            ${video.titulo}
                        </h3>

                        <p>${video.canal}</p>
                        <p>${video.fecha}</p>

                    </div>

                </div>

            </li>
        `;

    });

}