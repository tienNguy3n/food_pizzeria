import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        let updateItems

        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]

        if (existingCartItem) {
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updateItems = [...state.items]
            updateItems[existingCartItemIndex] = updateItem
        } else {
            updateItems = state.items.concat(action.item)
        }

        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - existingCartItem.price;
        let updateItems;

        if (existingCartItem.amount === 1) {
            updateItems = state.items.filter(item => item.id !== action.id)
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
    }

    if (action.type === 'CLEAR') {
        return defaultCartState
    }
    return defaultCartState;
}

const CartProvider = ({children}) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR' })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}

export default CartProvider