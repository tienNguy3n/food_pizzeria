import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        add: (state, action) => {
            let updateItems;

            const updateTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            const existingCartItem = state.items[existingCartItemIndex];

            if (existingCartItem) {
                const updateItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount,
                };
                updateItems = [...state.items];
                updateItems[existingCartItemIndex] = updateItem;
            } else {
                updateItems = state.items.concat(action.payload);
            }
            
            return {
                items: updateItems,
                totalAmount: updateTotalAmount
            };
        },

        remove: (state, action) => {
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload);
            const existingCartItem = state.items[existingCartItemIndex];
            const updateTotalAmount = state.totalAmount - existingCartItem.price;
            let updateItems;
            
            if (existingCartItem.amount === 1) {
                updateItems = state.items.filter((item) => item.id !== action.payload);
            } else {
                const updateItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1,
                };
                updateItems = [...state.items];
                updateItems[existingCartItemIndex] = updateItem;
            }

            return {
                items: updateItems,
                totalAmount: updateTotalAmount,
            };
        },

        clear: () => {
            return {
                items: [],
                totalAmount: 0
            };
        },
    },
});

export const { add, remove, clear } = cartSlice.actions
export default cartSlice.reducer