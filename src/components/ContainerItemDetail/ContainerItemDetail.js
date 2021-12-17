import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';



const ContainerItemDetail = () => {

    const [product, setProduct] = useState([])

    const productos = {
        id : "0001",
        name : "Albondigas",
        description : "De lentejas, porotos y alúbias. Totalmente vegetarianas, libre de creeldad animal. ",
        stock : 123,
        img : "imagen1.jpg"
    }

    const getProduct = new Promise((resolve, reject)  => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });

    useEffect(() => {
        getProduct.then(data => {
            setProduct(data)
        })
    }, []); 

    return (
        <div>
            <ItemDetail data={product}/>
        </div>
    )
}

export { ContainerItemDetail }