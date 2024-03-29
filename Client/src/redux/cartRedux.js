import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total: 0,
        quantity: 0,
    },
    reducers:{
        addProduct:(state, action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price*action.payload.quantity;
        },
        replaceCart:(state, action)=>{
            state = action.payload;
        }
    }
});

export const {addProduct, replaceCart} = cartSlice.actions;
export default cartSlice.reducer;

