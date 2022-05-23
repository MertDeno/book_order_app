import { createSlice } from "@reduxjs/toolkit";

const initialAddItemState = {isAddBtnClicked: false, amountOfItems: 0, addedItems: [], totalPrice: 0, itemExists: false}

const addItemSlice = createSlice({
    name: 'addItem',
    initialState: initialAddItemState,
    reducers: {
        replaceCart(state, action){
            state.addedItems= action.payload.addedItems
            state.amountOfItems = action.payload.amountOfItems
            state.totalPrice = action.payload.totalPrice
        },
        addNewItem(state, action){
            state.isAddBtnClicked = true
            state.amountOfItems = state.amountOfItems + action.payload
        },
        substractionOfNumberOfItems(state, action){
            debugger
            state.totalPrice = state.totalPrice - action.payload.toFixed(2)
            state.totalPrice = +state.totalPrice.toFixed(2)
            state.amountOfItems = state.amountOfItems - 1
        },
        summationOfNumberOfItems(state, action){
            debugger
            state.amountOfItems = state.amountOfItems + 1
        },
        addItem: (state, action) => {
            debugger
            const index = state.addedItems.findIndex((item) => 
                item.id === action.payload.id    
            )

            const newArray = [...state.addedItems]
            const existingItem = newArray[index]

            if(!existingItem){
                return {
                    ...state,
                    addedItems: state.addedItems.concat(action.payload)
//                    addedItems: [...state.addedItems, action.payload]
                }
            }
            else{
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.payload.amount
                }
                
                newArray[index] = updatedItem
                return {
                    ...state,
                    addedItems: newArray
                }
            }
        },
        removeItem(state, action){
            const deletedItemIndex = state.addedItems.findIndex((item) => 
                item.id === action.payload.id
            )

            const newArray = [...state.addedItems]
            const itemToBeDeleted = newArray[deletedItemIndex]
            if(itemToBeDeleted.amount === 1){
                return {
                    ...state,
                    addedItems: state.addedItems.filter((item) => item.id !== action.payload.id)
                }
            }
            else{
                itemToBeDeleted.amount = itemToBeDeleted.amount - 1 
            }
        },
        removeAllItems(state,action){
            return{
                ...state,
                addedItems: state.addedItems.filter((item) => action.payload)
            }
        },
        removeCartInfo(state){
            state.amountOfItems -= state.amountOfItems 
            state.totalPrice -= state.totalPrice
        },
        itemAdded(state){
            state.isAddBtnClicked = false
        },
        itemDidntAdd(state){
            state.isAddBtnClicked = true
        },
        calculatePrice(state, action){
            debugger
            state.totalPrice = state.totalPrice + action.payload
        }
    }
})

export default addItemSlice.reducer
export const addItemActions = addItemSlice.actions