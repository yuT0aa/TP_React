import './ProductCard.css';

function ProductCard({name,price,category,isAvailable}){
    return(
        <div className={`product-card ${isAvailable ? 'available' : 'out-of-stock'}`}>
            <span className="product-category">{category}</span>
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price}</p>

            <div className="product-status">
                {isAvailable ?(
                    <span className="status-badge available-badge">En Stock</span>
                ):(
                    <span className="status-badge unavailable-badge">Rupture de stock</span>
                )} 
            </div>
        </div>
    )
}
export default ProductCard;