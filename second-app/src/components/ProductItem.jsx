import ProductDate from "./ProductDate"

function ProductItem(props){
    return(
        <div className="w-[25%] mx-auto mb-12">
    <div className="flex justify-between items-center bg-blue-100 px-5 py-3 rounded-xl shadow-md">
        <ProductDate date={props.date} />
        <p className="text-gray-800 font-medium">{props.title}</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
            Add to Cart
        </button>
    </div>
</div>

    )
}

export default ProductItem;