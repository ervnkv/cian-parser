import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Form } from "./types";
import { createUrlCian } from "./utils";

const dataDefault: Form = {
    deal_type: "sale",
    engine_version: 2,
}
const initialState = {
    data: dataDefault,
    urlCian: ""
}
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<Partial<Form> | null>) {
            if (action.payload === null) {
                state.data = dataDefault
            } else {
                const new_data = {...state.data, ...action.payload} as Form
                state.data = new_data
                state.urlCian = createUrlCian(new_data)
            }
        },
    },
})

export const {
    setData,
} = formSlice.actions

export default formSlice.reducer