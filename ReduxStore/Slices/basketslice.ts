import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ItemsState {
    items: any[]; // Adjust the type of items as per your requirement
}

// Define the initial state using that type
const initialState: ItemsState = {
    items: [],
};

// Create a slice
const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        // Define reducers here
        addItem(state, action: PayloadAction<any>) {
            state.items.push(action.payload);
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items.splice(action.payload, 1);
        },
        selectBasketItems(state,action:PayloadAction<number>) {
           return state.items.filter((item) => item.id == action.payload)
        }  
    },
});

// Export actions generated from the slice
export const { addItem, removeItem } = itemsSlice.actions;

// Export the reducer
export default itemsSlice.reducer;
