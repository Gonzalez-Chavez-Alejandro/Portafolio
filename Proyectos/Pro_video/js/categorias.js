export function filtrarVideos(videos, categoria) {

    if (categoria === "favoritos") {
        return videos.filter(video => video.favorito);
    }

    if (categoria === "todo") {
        return videos;
    }

    return videos.filter(
        video => video.categoria === categoria
    );

}