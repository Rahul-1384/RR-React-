function ProductDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.toLocaleString('en-US', {day: '2-digit'});
    const day = props.date.getFullYear();
    return(
        <div>
            <div className="flex flex-col justify-center items-center pb-5">
                <p>{year}</p>
                <p>{month}</p>
                <p>{day}</p>
            </div>
        </div>
    )
}

export default ProductDate;