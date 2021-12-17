import React, {useState} from 'react';
import './Item.css'

const Item = ({data}) => {

    const [itemCount, setItemCount] = useState(0)
    const [setStock, setStockCount] = useState(data.stock)
    
    const updateItem = () => {
        if(itemCount < data.stock) {
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
        <div>
            <img src={`../../assets/${data.img}`} alt="Imagen de producto"/>
            <p>Stock: {setStock}</p>
            <p>{data.name}</p>
            <p>{data.description}</p>
            <h1 className="product-cantidad">{itemCount}</h1>
            <button className="btn" onClick={removeItem}>-</button>
            <button id="btn-update" className="btn" onClick={updateItem}>+</button>
            <br/><br/>
            <button className="btn btn-cart">Agregar al carrito</button>
        </div>
    )
}

export default Item;