import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const ContainerItemDetail = () => {

    const [product, setProduct] = useState([])
    const { id } = useParams()
    
    const productos = [{
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
    }]

    const getProduct = new Promise((resolve, reject)  => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });

    useEffect(() => {
        getProduct.then(resultsProducts => {
            resultsProducts.filter(resultsProducts => {
                if(resultsProducts.id && id) {
                    return setProduct(resultsProducts)
                }
            });
        })
    }, []); 

    return (
        <div>
            <ItemDetail resultProducts={product}/>
        </div>
    )
}

export { ContainerItemDetail }