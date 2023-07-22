import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
    const { products } = props;

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
                <ItemCount stock={products.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;