import { configureStore } from "@reduxjs/toolkit";
import addItemSlice from "./addItem"; 
import confirmItemSlice from "./confirmItem";
import orderItemSlice from "./orderItem"; 

const store = configureStore({
    reducer: {addItem: addItemSlice, orderItem: orderItemSlice, confirmItem: confirmItemSlice}
})

export default store