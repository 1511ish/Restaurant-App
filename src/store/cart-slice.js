import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      items: [],
      totalItems: 0,
      totalAmount: 0,
   },
   reducers: {
      addItemToCart(state, action) {
         const newItem = action.payload;
         const existingItem = state.items.find((item) => item.id === newItem.id);
         if (!existingItem) {
            state.items.push({
               id: newItem.id,
               name: newItem.name,
               price: newItem.price,
               totalPrice: newItem.price,
               quantity: 1
            })
         } else {
            existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            existingItem.quantity++;
         }

         state.totalItems++;
         state.totalAmount += newItem.price;
      },

      removeItemFromCart(state, action) {
         const id = action.payload;
         const currItem = state.items.find((item) => item.id === id);
         if (currItem.quantity === 1) {
            state.items = state.items.filter((item) => item.id !== id);
         } else {
            currItem.totalPrice -= currItem.price;
            currItem.quantity--;
         }
         state.totalItems--;
         state.totalAmount = state.totalAmount - currItem.price;
      }
   }
})

export const cartActions = cartSlice.actions;
export default cartSlice;