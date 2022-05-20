import Head from 'next/head'; // Me permite usar metadatos y ser indexable por buscadores
import axios from 'axios';
import Link from 'next/Link';

// getServerSideProps() es similar a getStaticProps()
// La diferencia es que este se ejecuta CADA VEZ que se
// hace una petición al servidor (o pido la página)
// Lo usamos cuando los datos de la API cambian seguido

export async function getServerSideProps(context){
    const { colorId } = context.query;

    const response = await axios.get(`https://reqres.in/api/unknown/${colorId}`)
        .catch(err => console.log(err));

    const { data } = response;
    return {
        props: {
            color: data //prop con la data []
        }
    }
}


const color = (props) => {
    return(
        <>
            <Head>
                <title>{props.color.data.name}</title>
            </Head>
            <h2>{props.color.data.name}</h2>
            <p>Year: {props.color.data.year}</p>
            <p>Color: {props.color.data.color}</p>
            <p>Pantone: {props.color.data.pantone_value}</p>
            <Link href='/colors'>Regresar</Link>
        </>
    )
}

export default color;

/*
    "data": {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    }
*/