import { createSlice } from "@reduxjs/toolkit";

const initialOrderState = {isOrderBtnClicked: false}

const orderItemSlice = createSlice({
    name: 'orderItem',
    initialState: initialOrderState,
    reducers: {
        setIsOrderBtnClicked(state){
            state.isOrderBtnClicked = !state.isOrderBtnClicked
        },
        setIsOrderBtnClickedFalse(state){
            state.isOrderBtnClicked = false
        }
    }
})

export default orderItemSlice.reducer
export const orderItemActions = orderItemSlice.actions