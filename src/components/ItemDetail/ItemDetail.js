import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({ resultProducts }) => {
    return (
        <div className='cont-main-detail'>
            <div className='cont-detail'>
                <img src={`../../assets/${resultProducts.img}`} alt="Imagen de producto"/>
                <p>{resultProducts.name}</p>
                <p>{resultProducts.description}</p>
                <button className='btn'>Comprar</button>
            </div>
        </div>
    )
}

export { ItemDetail }