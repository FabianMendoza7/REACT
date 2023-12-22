import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload
} from "@remix-run/react";
import globalStyles from './styles/index.css';
import Header from "./components/header";
import Footer from './components/footer';
import nosotrosStyles from './styles/nosotros.css';

export function meta(){
    return [
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: "width=device-width,initial-scale=1"
        }
    ]
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: globalStyles
        },
        {
            rel: 'stylesheet',
            href: nosotrosStyles
        },        
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Comfortaa&family=Roboto:wght@400;700;900&family=Staatliches&display=swap'
        },            
    ]
}

export default function App(){
    return(
        <Document>
            <Outlet />
        </Document>
    )
}

function Document({children}: any){
    return(
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}

                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}