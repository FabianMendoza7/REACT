export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitars?populate=image`);
    return await respuesta.json()
}

export async function getGuitarra(url) {
    const respuesta = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    return await respuesta.json()
}