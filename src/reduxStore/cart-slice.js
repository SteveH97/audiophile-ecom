import { createSlice } from '@reduxjs/toolkit'
import update from 'react-addons-update';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers:{
        submitCart: (state, action)=>({
            ...state,
            cart: [...state.cart, action.payload]
        }),

        deleteCartItem: (state, action)=>({
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        }),

        clearCart: (state)=>({
            ...state,
            cart: []
        }),

        // addQuantity: (state, action)=>({
        //     ...state,
        //     cart: [
        //         state.cart.map(
        //             (item, i) => i === action.payload ? {...item, item.quantity: quantity + 1} : item
        //         )
        //     ]
        // })
    }
})

export const { submitCart, deleteCartItem, clearCart } = cartSlice.actions;
export default cartSlice;