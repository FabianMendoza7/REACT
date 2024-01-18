import { useLoaderData} from '@remix-run/react';
import { getPost} from '~/models/posts.server';
import { formatearFecha } from '~/utils/helpers';
import styles from "~/styles/blog.css";

export function links() {
  return [
      {
          rel: "stylesheet",
          href: styles
      }
  ]
}

export function meta({data}) {
  if(!data){
      return {
          title: `GuitarLA - Entrada No Encontrada`,
          description: `Guitarras, venta de guitarras, guitarra no encontrada`
      }
  }

  return {
      title: `GuitarLA - ${data.data[0].attributes.title}`,
      description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.title}`
  }
}

export async function loader({params}){
    const {postUrl} = params;
    const post = await getPost(postUrl);

    if(post.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        });
    }

    return post;
}

export default function Post() {
  const post = useLoaderData();
  const { title, content, image, publishedAt} = post?.data[0].attributes;

  return (
    <article className='contenedor post mt-3'>
        <img className="imagen" src={image?.data?.attributes.url} alt={`Imagen del blog ${title}`}></img>

        <div className="contenido">
            <h3>{title}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">$ {content}</p>
        </div>      
    </article>
  )
}
