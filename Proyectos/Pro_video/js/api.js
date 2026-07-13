export async function obtenerVideos() {

    const respuesta = await fetch("./videos.json");

    return await respuesta.json();

}