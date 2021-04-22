import React from 'react';

const Product = (props) => {
    // console.log(props);
    const {addToCart, product} = props;
    
    return (
        <div style={{border: '1px solid gray'}}>
            <h3>{product.name}</h3>
            <button onClick={()=>addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;