import ProductDate from "./ProductDate"

function ProductItem(props){
    return(
        <div className="flex">
            <ProductDate date={props.date}/>
            <h1>{props.title}</h1>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductItem;