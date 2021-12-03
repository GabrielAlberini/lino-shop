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

import Item from '../Item/Item'

const ListItems = () => {
    const productos = [
        {
            nombre : "Remera 1",
            precio : 200,
            stock : 78
        },
        {
            nombre : "Remera 2",
            precio : 200,
            stock : 4
        },
        {
            nombre : "Remera 3",
            precio : 200,
            stock : 21
        },
    ]
    return (
        <div>
            <h2>Productos destacados</h2>
            {productos.map((producto) => {
                return (
                    <Item nombre={producto.nombre} precio={producto.precio} stock={producto.stock}/>
                )
            })}
            <h1>Arriba prueba de map en objeto</h1>
        </div>
    )
}

export default ListItems;