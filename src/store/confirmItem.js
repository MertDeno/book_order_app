import { createSlice } from "@reduxjs/toolkit";

const initialConfirmItemState = {isCartConfirmed: false}

const confirmItemSlice = createSlice({
    name: 'confirmItem',
    initialState: initialConfirmItemState,
    reducers: {
        setCartConfirmedToTrue(state){
            state.isCartConfirmed = true
        },
        setCartConfirmedToFalse(state){
            state.isCartConfirmed = false            
        }
    }
}
)

export default confirmItemSlice.reducer
export const confirmItemActions = confirmItemSlice.actions
