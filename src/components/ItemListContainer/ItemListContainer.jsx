import './itemContainer.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getData, { getCategory } from '../../services/asyncMock';
import Item from '../Item/Item';


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    async function productsRequest() {
        let res = categoryId ? await getCategory(categoryId) : await getData();
        setProducts(res);
    }
    useEffect(() => {
        productsRequest();
    }, [categoryId]);


    return (
        <div>
            <h2>Welcome to the Khajit's Corner!</h2>
            <div className='productos'>
                {products.map((item) => (<Item key={item.id} {...item} />))}
            </div>
        </div>
    );
}

export default ItemListContainer;