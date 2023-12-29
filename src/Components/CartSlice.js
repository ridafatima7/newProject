import { createSlice } from "@reduxjs/toolkit";
const initialState={
  carts:[{
    id: 75795,
     name: 'COKE BOTTLE 1.5LTR', 
    image: 'https://firebasestorage.googleapis.com/v0/b/tezz-d…=media&token=abbcb8bd-f373-4d69-9655-c8f7775553b2',
  }]
}
const CartSlice=createSlice({
    name:"cart",
    initialState,
    // {
        // cart:[]
    // },
    reducers:{
      addtoCart:(state,action)=>{
        console.log(action.payload)
        state.carts.push(action.payload)
      },
      removefromCart:(state,action)=>{
         state.carts.filter(x=>x.id !==action.payload.id)
      }
    }

})
export default CartSlice.reducer;
export const {addtoCart,removefromCart}= CartSlice.actions;

