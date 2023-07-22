function ItemDetail(props) {
    const {products} = props;

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

export default ItemDetail;