// for Item to cart
export const addCart=(product)=>{

    return {
        type:"ADDITEM",
        payload :product
    }
}


// for Item to cart
export const DelCart=(product)=>{

    return {
        type:"DELITEM",
        payload :product
    }
}