import { useEffect, useState } from 'react';
import Item from '../Item/Item'
import { Container} from 'react-bootstrap';
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress'
import { ContainerItemDetail } from '../ContainerItemDetail/ContainerItemDetail';

const ListItems = () => {

    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])

    const productos = [
        {
            id : "0001",
            name : "Albondigas",
            description : "De lentejas, porotos y alúbias. Totalmente vegetarianas, libre de creeldad animal. ",
            stock : 123,
            img : "imagen1.jpg"
        },
        {
            id : "0002",
            name : "Bastoncitos de verdura",
            description : "De acelga y zapallo. Totalmente artesanal y con productos propios.",
            stock : 54,
            img : "imagen2.jpg"
        },
        {
            id : "0003", 
            name : "Chorivegano",
            description : "Chorizos realizados con porotos negros cosechados de huerta propia.",
            stock : 36,
            img : "imagen3.jpg"
        },
        {
            id : "0004",
            name : "Empanadas vegetarianas",
            description : "Realizadas con soja texturisada y arroz integral.",
            stock : 36,
            img : "imagen4.jpg"
        },
        {
            id : "0005",
            name : "Medallones mixtos",
            description : "Medallones de lino, avena, lenteja y arroz integral. ¡Riquísimas!",
            stock : 36,
            img : "imagen5.jpg"
        }
    ]

    const getProducts = new Promise((resolve, reject)  => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });

    useEffect(() => {
        getProducts.then((data) => {
            setProducts(data)
            setLoader(false)
        })
    }, []) 

    return ( 
        <div>
            <h2>Productos destacados</h2>
            <Container className="product-container">
            {
                loader 
                ? 
                <CircularProgress color="success"/> 
                : 
                <Grid container spacing={2}>
                {products.map( product => {
                    return (
                        <Grid item xs={3} key={product.id}>
                            <Item data={product}/>
                        </Grid>
                    )
                })}
                </Grid>      
            }         
            </Container>
        </div>
    )
}

export { ListItems };