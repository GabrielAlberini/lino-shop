// Functional component
// De esta manera de pasan las propiedades de un componente en un componente funcional
// const ListItems = ({nombre, precio}) => {
//     return (
//         <div>
//            Nombre: {nombre}
//         <br />
//            Precio: {precio}
//         <hr />
//         </div>
//     )
// }


// Class components
// import React from 'react'

// class ListItems extends React.Component {
//     render () {
//         return (
//             <div>
//                 {/*Propiedades en componentes de clase*/}
//                 Nombre: {this.props.nombre}
//                 <br />
//                 Precio: {this.props.precio}
//             </div>
//         )
//     }
// }

// export default ListItems;


import { useEffect, useState } from 'react';
import Item from '../Item/Item'
import { Spinner } from 'react-bootstrap';

const ListItems = () => {
    const productos = [
        {
            id : "ABC1",
            name : "Remera de Linkin Park",
            description : "Remera de polyester",
            stock : 123
        },
        {
            id : "ABC2",
            name : "Remera de Evanescence",
            description : "Remera de algodón color negra",
            stock : 54
        },
        {
            id : "ABC3",
            name : "Remera de BLINK 182",
            description : "Remera de algodón",
            stock : 36
        },
    ]

    const [loader, setLoader] = useState(true)


    const getProducts = new Promise((resolve, reject)  => {
        setTimeout(() => {
            resolve(productos)
        }, 3000);
    });

    // getProducts.then((data) => {
    //     console.log("Respuesta de promesa", data)
    // })


    // Otra forma de hacerlo es importando useEffect => 
    // Lo usaremos para llamadas a API'S.

    useEffect(() => {
        getProducts.then((data) => {
            console.log("Respuesta de promesa", data)
            setLoader(false)
        })
    });



    return (
        <div>
            <h2>Productos destacados</h2>
            {
                loader ? <div>Cargando Prductos</div> : <div>PRODUCTOS CARGADOS</div>
            }
            {productos.map((producto) => {
                return (
                    <Item />
                )
            })}
            <h1>Arriba prueba de map en objeto</h1>
            {/* <button onClick={callPromise}>Llamada a Promise</button> */}
        </div>
    )
}

export { ListItems };