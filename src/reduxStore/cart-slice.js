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

        changeQuantity: (state, action) => void({
            ...state,
            cart: state.cart.map(item => {
                if(item.id === action.payload.id){
                    item.quantity = action.payload.amount;
                    
                }
            })
        })
    }
})

export const { submitCart, deleteCartItem, clearCart, changeQuantity } = cartSlice.actions;
export default cartSlice;