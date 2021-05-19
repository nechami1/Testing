import React, { useState } from 'react';
import { bottom } from '@popperjs/core';

const products = [
    { describe: "apple", price: 7, category: "fruit" },
    { describe: "orange", price: 6, category: "fruit" },
    { describe: "grape", price: 13, category: "fruit" },
    { describe: "peach", price: 10, category: "fruit" },
    { describe: "Pomegranate", price: 3, category: "fruit" },
    { describe: "pear", price: 9, category: "fruit" },
    { describe: "berry", price: 15, category: "fruit" },
    { describe: "tomato", price: 4, category: "vegetables" },
    { describe: "cucumber", price: 3, category: "vegetables" },
    { describe: "pepper", price: 5, category: "vegetables" },
    { describe: "batata", price: 6, category: "vegetables" },
    { describe: "potato", price: 3, category: "vegetables" },
    { describe: "chocolate", price: 6, category: "sweets" },
    { describe: "shugi", price: 4, category: "sweets" },
    { describe: "bamba", price: 3, category: "sweets" },
    { describe: "bisli", price: 3, category: "sweets" },
]
function ShowProducts(props) {

    function HideExpensiveItems(){
        setCategoryProducts(products.filter(p =>  p.category == props.category && p.price <= 10 ));
   
    }

    const [categoryProducts, setCategoryProducts] = useState(products.filter(product => product.category == props.category))
    const count = categoryProducts.length;

    return (
        <div>
            <h1>{props.category}</h1>
            {categoryProducts.map(p => <li>product: {p.describe} price: {p.price}</li>)}
            {count > 5 ? <h2>There are many products in this category</h2> : ' '}
            <button onClick={HideExpensiveItems}> Hide expensive items</button>
        </div>
    );
}
export default ShowProducts;