export async function getGuitars() {
    const respuesta = await fetch(`${process.env.API_URL}/guitars?populate=image`);
    return await respuesta.json();
}