import React from 'react'
import Item from './Item'

const ItemList = (item) => {


    return (
        <div>
            {item.map((item, index) => 
            <Item key={index} />
            )}
            
        </div>
    )
}

export default ItemList
