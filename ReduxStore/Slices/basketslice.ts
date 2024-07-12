// Import necessary modules from Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the item object
interface Item {
    id: number;
    name: string;
    // Add other properties as needed
}

// Define a type for the slice state
interface ItemsState {
    items: Item[];
}

// Define the initial state using that type
const initialState: ItemsState = {
    items: [],
};

// Create a slice
const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        // Define reducers here
        addItem(state, action: PayloadAction<Item>) {
            state.items.push(action.payload);
        },
        removeItem(state, action: PayloadAction<number>) {
            const indexToRemove = state.items.findIndex(item => item.id === action.payload);
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
        },
    },
});

// Export actions generated from the slice
export const { addItem, removeItem } = basketSlice.actions;

// Export the reducer
export default basketSlice.reducer;
