import Head from 'next/head'; // Me permite usar metadatos y ser indexable por buscadores
import axios from 'axios';
import Link from 'next/Link';

// API: https://reqres.in

// getStaticProps() es propio de Next JS
// Hace la llamada a la API del lado del servidor, la procesa
// y entrega el resultado como PROPS al componente para que este
// lo use.
// getStaticProps solamente hara la llamada a la API cuando se haga Build
// la aplicación y el resultado lo guardara en un archivo JSON estatico,
// y de aquí servira la data.
// Es ideal usarlo, cuando los datos de la API no cambian constantemente,
// o no se necesiten los datos más actualizados

export async function getStaticProps(){
    const response = await axios.get('https://reqres.in/api/unknown')
        .catch(err => console.log(err));

    const { data } = response;
    
    return {
        props: {
            colors: data //prop con la data []
        }
    }
}

const colors = (props) => {
    return(
        <>
            <Head>
                <title>All the Colors</title>
            </Head>
            <h2>The Colors</h2>
            {props.colors.data.map( element => <li key={element.id}>
                <Link href={`/colors/${element.id}`}>{element.name}</Link>
            </li>)}
        </>
    )
}

export default colors;