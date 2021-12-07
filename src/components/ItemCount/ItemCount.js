import React, {useState, useEffect} from 'react';
import './ItemCount.css'
import { Spinner } from 'react-bootstrap';

const ItemCount = ({stock}) => {

    const [itemCount, setItemCount] = useState(0)
    const [setStock, setStockCount] = useState(stock)
    
    const updateItem = () => {
        if(itemCount < stock) {
            setItemCount(itemCount + 1)
            lessStock()
        } 
    }

    const removeItem = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
            moreStock()
        }
    }

    const lessStock = () => {
        if (updateItem) {
            setStockCount(setStock - 1)
        }
    }

    const moreStock = () => {
        if (removeItem){
            setStockCount(setStock + 1)
        }
    }

    return (
        <div className="cont-product">
            <h2 className="product-title">Remera</h2>
            <h1 className="product-cantidad">{itemCount}</h1>
            <p>Stock: {setStock}</p>
            <button className="btn" onClick={removeItem}>-</button>
            <button id="btn-update" className="btn" onClick={updateItem}>+</button>
            <br />
            <button className="btn-cart">Agregar al carrito</button>
            <Spinner />
        </div>
    )
}

export { ItemCount }