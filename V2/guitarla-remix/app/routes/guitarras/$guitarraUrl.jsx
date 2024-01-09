import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "~/styles/guitarras.css";

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export async function loader({request, params}){
    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);

    if(guitarra.data.length === 0){
        throw new Response("", {
            status: 404,
            statusText: "Guitarra No Encontrada"
        })
    }

    return guitarra;
}

export function meta({data}) {
    if(!data){
        return {
            title: `GuitarLA - Guitarra No Encontrada`,
            description: `Guitarras, venta de guitarras, guitarra no encontrada`
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.name}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.name}`
    }
}

export default function Guitarra() {
    const guitarra = useLoaderData();
    const { name, description, image, precio } = guitarra.data[0].attributes;
    return (
        <main className='contenedor guitarra'>
            <img className="imagen" src={image.data.attributes.url} alt={`Imagen de la guitarra ${name}`}></img>

            <div className="contenido">
                <h3>{name}</h3>
                <p className="texto">{description}</p>
                <p className="precio">$ {price}</p>
            </div>
        </main>
  )
}
