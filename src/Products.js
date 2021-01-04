import React from 'react';
import Product from "./Product"

const Product = () => {
    return (
        findOne()
    )
}
const addProduct = () => {
    return (
        addOne()
    )
}
const deleteProduct = () => {
    return (
        deleteOne()
    )
}

export default { Product, addProduct, deleteProduct }

    < Route path = "/products" component = { Product, addProduct, deleteProduct } />

