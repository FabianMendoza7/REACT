// import { Outlet } from '@remix-run/react'
import { useLoaderData } from '@remix-run/react'
import { getPosts } from '../models/posts.server'
import styles from '~/styles/blog.css'
import Post from '../components/post'

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Blog() {
  const posts = useLoaderData()

  return (
    <main className="contenedor">
      {/* <Outlet /> */}
      <h2 className='heading'>Blog</h2>
      <div className='blog'>
        {posts.map(post => (
          <Post 
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog