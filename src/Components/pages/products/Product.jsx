import React from 'react'
import { productCardsData } from "./ProductsData"


function Product() {
    return (
        <div>
            {
                productCardsData.map((productElements) => {
                    return (
                        <div>
                        <h1>{productElements.title}</h1>
                        <h3>{productElements.desc}</h3>
                        <h5>{productElements.price}</h5>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Product
