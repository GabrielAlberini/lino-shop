import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    console.log(data)
    return (
        <div className='cont-main-detail'>
            <div className='cont-detail'>
                <img src={`../../assets/${data.img}`} alt="Imagen de producto"/>
                <p>{data.name}</p>
                <p>{data.description}</p>
                <p>¡Nuevitas! Las albondigas vegetarianas son increibles. Ni bien las probas te enamoras de ellas. Riquisimas y muy faciles de cocinar. Aptas para estofados o ideales para quedar muuuuy bien en una picada. Hasta para cita cof cof jaja. Dale, que estas esperando, reserva las tuyas ¡QUE SE VAN VOLANDO!</p>
                <button className='btn'>Comprar</button>
            </div>
        </div>
    )
}

export { ItemDetail }