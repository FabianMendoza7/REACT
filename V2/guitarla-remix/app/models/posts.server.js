export async function getPosts() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=image`);
    return await respuesta.json()
}

export async function getPost(url) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    return await respuesta.json()
}