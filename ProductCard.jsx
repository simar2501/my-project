function ProductCard(props){
    return(
        <div id="Product-Card">
            <div><strong>{props.name}</strong> </div>
            <div><strong>Price:</strong> ${props.price}</div>
            <div><strong>Status:</strong> {props.status}</div>
        </div>
    )
}
export default ProductCard;     