import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carts : []
}

//  card Slice 
 const cartSlice = createSlice ({
    name : "cartsSlice",
    initialState,
    reducers : {
        addToCart : (state,action)=>{
            const IteamIndex = state.carts.findIndex((iteam)=>iteam.id === action.payload.id)
            if(IteamIndex >= 0)
                {
                    state.carts[IteamIndex].qnty+=1
                }
                else{
                    const temp = {...action.payload,qnty:1}
                    state.carts = [...state.carts,temp]
                }
        },

        // remove particular items
        removeToCart : (state,action)=>{
            const data = state.carts.filter((ele)=>ele.id!==action.payload)
            state.carts=data
        },

        // remove single items
        removeSingleItems : (state,action)=>{
            const IteamIndex_dec = state.carts.findIndex((iteam)=>iteam.id === action.payload.id)

            if (state.carts[IteamIndex_dec].qnty >= 1)
                {
                    state.carts[IteamIndex_dec].qnty -=1
                }
        } ,

        // clear Cart
        emptyCartIteam : (state)=>{
            state.carts=[]
        }
    }
 });

 export const {addToCart,removeToCart,removeSingleItems,emptyCartIteam} = cartSlice.actions;
 export default cartSlice.reducer;