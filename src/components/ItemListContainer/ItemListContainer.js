import React from "react";
import './ItemListContainer.css'
import { ListItems } from '../ListItems/ListItems'

const ItemListContainer = (() => {
    return(
        <div className="item-list-cont">
            <ListItems />
        </div>
    )
});

export { ItemListContainer } 