function MapMethod(){
    const items = ["Dal", "Fruits", "Roti", "Paneer", "Milk", "Ice Cream"];
    return <>
        <h1>Map Method</h1>
        <ul>
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}

            {/* <li>Fruits</li>
            <li>Roti</li>
            <li>Paneer</li>
            <li>Milk</li>
            <li>Ice Cream</li> */}
        </ul>
    </>
}

export default MapMethod;