import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  subtotal: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const existingProductIndex = state.carts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) 
      {
        state.carts[existingProductIndex].qty += 1;
      }
       else 
      {
        const product = { ...action.payload, qty: 1 };
        state.carts.push(product);
      }
      // console.log(action.payload);
      // const product={...action.payload,qty:1};
      // console.log(product);
      // state.carts.push(product);
    },
    removefromCart: (state, action) => {
      const productIndex = state.carts.findIndex((x) => x.id === action.payload.id);
      if (productIndex !== -1) {
      const currentQty = state.carts[productIndex].qty;
      if (currentQty > 1) {
        state.carts[productIndex].qty -= 1;
      } else {
        state.carts = state.carts.filter((x) => x.id !== action.payload.id);
      }
  }
  
    },
    Subtotal: (state, action) => {
      state.subtotal = state.carts.reduce((total, product) => {
        return total + product.qty * product.price; 
      }, 0);
    },

  },
});

export default CartSlice.reducer;
export const { addtoCart, removefromCart, Subtotal } = CartSlice.actions;
