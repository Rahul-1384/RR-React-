import { useState, useEffect } from "react";

function ItemsDate(props) {
    const date = props.date;
    const month = props.month;
    const year = props.year;
    return(
        <div>
            <p>{date}</p>
            <p>{month}</p>
            <p>{year}</p>
        </div>
    )
}

export default ItemsDate;