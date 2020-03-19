import { ActionTypes } from "./Types";

export const CartReducer = (dataStore, action) => {
    let newStore = {
        cart: [],
        cartItem: 0,
        cartPrice: 0,
        ...dataStore
    }

    switch(action.type){
        case ActionTypes.CART_ADD:
            const p = action.payload.product;
            const q = action.payload.quantity;

            console.log(action.payload)

            let existingProduct = newStore.cart.find( item => item.product.id === p.id)

            if(existingProduct){
                existingProduct.quantity += q
            }else{
                newStore.cart = [...newStore.cart, action.payload]
            }

            newStore.cartItem += q;
            newStore.cartPrice += p.price * q;

            return newStore;
        default:
            return dataStore
    }
}

// each item/product in the cart has a quantity
// differentiate between the products and the product in the cart
// the newStore object handles all of the shopping related things, your cart, the total price and 
// the number of items in the cart

// if a product was already in the cart, we augment the quantity (2 shampoos), else we add the payload in the cart
// after all we increase the overall number of product by adding the quantity payload we received
// newStore.cartItems += q;
// and the total price ( each product price * the quantity)
