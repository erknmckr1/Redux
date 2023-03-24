import React from 'react'
//import img from '../menu-ımg/burrito.jpeg'
import  './card.css'
function Card({category}) {
  return (
    <div className='col-lg-6 col-sm-12 p-3 menu_ıtem'>
        <img src={category.img} alt={category.title} />
        
        <div className='item'>
            <div className='item_title'>
                <span>{category.title}</span>
                <span>{category.price}</span>
            </div>
            <div className='item_desc'>
                {category.desc}
            </div>
        </div>
    </div>
  )
}

export default Card