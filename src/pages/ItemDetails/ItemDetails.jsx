import React from "react";

function ItemDetails(props){
    
    return(
        <div>
            <p>
            <b>Sku details</b>
            </p>
            sku_id: {props.selectedValue.sku_id}
            <br />
            sku_name: {props.selectedValue.sku_name}
            <br />
            product_code: {props.selectedValue.product_code}
            <br />
            barcode: {props.selectedValue.barcode}
            <br />
            stock_in: {props.selectedValue.stock_in}
            <br />
            stock_out: {props.selectedValue.stock_out}
            <br />
            stock_on_hand: {props.selectedValue.stock_on_hand}
            <br />
            stock_reserved: {props.selectedValue.stock_reserved}
            <br />
            stock_available: {props.selectedValue.stock_available}
            <br />
            modified_date: {props.selectedValue.modified_date}
            <br />
            created_date: {props.selectedValue.created_date}
            <br />
            </div>
    )
}

export { ItemDetails };
