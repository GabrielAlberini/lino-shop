import React, {useState, useEffect} from 'react';
import './ItemCount.css'

const Product = ({stock}) => {

    const [itemCount, setItemCount] = useState(0)
    
    const updateItem = () => {
        if(itemCount < stock) {
            setItemCount(itemCount + 1)
        } 
    }

    const removeItem = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
        }
    }

    return (
        <div className="cont-product">
            <h2 className="product-title">Remera</h2>
            <h1 className="product-cantidad">{itemCount}</h1>
            <button className="btn" onClick={removeItem}>-</button>
            <button id="btn-update" className="btn" onClick={updateItem}>+</button>
            <br />
            <button className="btn-cart">Agregar al carrito</button>
        </div>
    )
}

export { Product }