import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Form } from "./types";

const dataDefault: Form = {
    deal_type: {
        value_type: "single",
        value: "sale"
    },
    engine_version: {
        value_type: "single",
        value: "2"
    },
    region: {
        value_type: "single",
        value: "1"
    },
}
const initialState = {
    data: dataDefault,
    url: ""
}
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<Partial<Form> | null>) {
            if (action.payload === null) {
                state.data = dataDefault
            } else {
                const new_data = {...state.data, ...action.payload}
                state.data = new_data
                state.url = GetUrl(new_data)
            }
        },
    },
})

export const {
    setData,
} = formSlice.actions

export default formSlice.reducer

const GetUrl = (data: Form) => {
    const baseURL = "https://cian.ru/cat.php?"

    const keys = Object.keys(data) as (keyof Form)[]
    
    const params = keys.map((key) => {
        const obj = data[key]
        if (!obj) return
        const type = obj.value_type
        const encodedKey = encodeURIComponent(key)
        if (type === "single") {
            const encodedValue = encodeURIComponent(obj.value)
            return `${encodedKey}=${encodedValue}`
        } else if (type === "multi") {
            return obj.value.map(value => {
                const encodedValue = encodeURIComponent(value)
                return `${encodedKey}=${encodedValue}`
            }).join("&")

        }
    }).join("&")
    
    return baseURL+params
}