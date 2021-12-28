import React, {useState} from 'react';
import './Item.css'
import { Link } from 'react-router-dom'

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
        <div className='item-cont'>
            <img className='item-img' src={`../../assets/${data.img}`} alt="Imagen de producto"/>
            <p className='product-stock'>Stock: {setStock}</p>
            <p className='product-name'>{data.name}</p> 
            <h1 className="product-cantidad">{itemCount}</h1>
            <button className="btn" onClick={removeItem}>-</button>
            <button id="btn-update" className="btn" onClick={updateItem}>+</button>
            <br/><br/>
            <Link to={`products/${data.id}`}>
            <button className='btn'>Ver Producto</button>
            </Link>
            <button className="btn btn-cart">Agregar al carrito</button>
        </div>
    )
}

export { Item };