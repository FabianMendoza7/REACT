export async function getGuitars() {
    const respuesta = await fetch(`${process.env.API_URL}/guitars?populate=image`);
    return await respuesta.json();
}

export async function getGuitar(url) {
    const respuesta = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=imagen`)
    return await respuesta.json();
}