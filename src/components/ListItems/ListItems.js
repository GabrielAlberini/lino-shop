import CircularProgress from '@mui/material/CircularProgress'
import { useEffect, useState } from 'react';
import { Item } from '../Item/Item'
import { Container} from 'react-bootstrap';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
 
const ListItems = () => {

    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const { category } = useParams()

    const productos = [
        {
            id : "0001",
            name : "Albondigas",
            category: "congelados",
            description : "De lentejas, porotos y alúbias. Totalmente vegetarianas, libre de creeldad animal. ",
            stock : 123,
            img : "imagen1.jpg"
        },
        {
            id : "0002",
            name : "Bastoncitos de verdura",
            category: "congelados",
            description : "De acelga y zapallo. Totalmente artesanal y con productos propios.",
            stock : 54,
            img : "imagen2.jpg"
        },
        {
            id : "0003", 
            name : "Chorivegano",
            category: "congelados",
            description : "Chorizos realizados con porotos negros cosechados de huerta propia.",
            stock : 36,
            img : "imagen3.jpg"
        },
        {
            id : "0004",
            name : "Empanadas vegetarianas",
            category: "panificados",
            description : "Realizadas con soja texturisada y arroz integral.",
            stock : 36,
            img : "imagen4.jpg"
        },
        {
            id : "0005",
            name : "Medallones mixtos",
            category: "congelados",
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
    }, [category]) 

    return ( 
        <div>
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