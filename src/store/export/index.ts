import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    selectedItems: [] as number[],
}
const exportSlice = createSlice({
    name: 'export',
    initialState,
    reducers: {
        setSelection(state, action: PayloadAction<number | null>) {
            if (action.payload === null) {
                state.selectedItems = []
            } else {
                if (state.selectedItems.includes(action.payload)) {
                    state.selectedItems = state.selectedItems.filter(num => num !== action.payload)
                } else {
                    state.selectedItems.push(action.payload)
                }
            }
        },
    },
})

export const {
    setSelection,
} = exportSlice.actions

export default exportSlice.reducer
