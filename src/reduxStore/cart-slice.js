import { createSlice } from '@reduxjs/toolkit'

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
        })
    }
})

export const { submitCart, deleteCartItem } = cartSlice.actions;
export default cartSlice;