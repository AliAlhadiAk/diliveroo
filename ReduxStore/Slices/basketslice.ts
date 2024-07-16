
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Item {
    id: number;
    name: string;

}


interface ItemsState {
    items: Item[];
}


const initialState: ItemsState = {
    items: [],
};


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
