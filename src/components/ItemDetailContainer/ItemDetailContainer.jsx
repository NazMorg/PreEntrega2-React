import { getProduct } from "../../services/asyncMock";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    async function productsRequest() {
        const res = await getProduct(id);
        setProducts(res);
    }
    useEffect(() => {
        productsRequest();
    }, []);

    return (
        <div className="cardInfo">
            <div>
                <img width={300} src={products.img} alt="imagen"></img>
            </div>
            <div className="cardInfoDetails">
                <div>
                    <h3 className="cardInfoTitle">{products.title}</h3>
                    <p className="cardInfoDesc">{products.description}</p>
                </div>
                <div>
                    <h5 className="cardInfoPrice">Price: $ {products.price}</h5>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer;