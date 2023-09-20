import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Form } from "./types";
import { Item as Region } from "../../components/sidebar/components/region/types";

const dataDefault: Form = {
    deal_type: {
        value_type: "single",
        value: "sale" || "rent"
        
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
    url: "",
    region: {
        region: null as null | Region,
        mainTown: null as null | Region,
    }
    
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
        setRegion(state, action: PayloadAction<typeof state.region>) {
            if (action.payload === null) {
                state.region = initialState.region
            } else {
                state.region = action.payload
            }
        },
    },
})

export const {
    setData,
    setRegion
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
        switch (type) {
            case "single":
                const encodedValue = encodeURIComponent(obj.value)
                return `${encodedKey}=${encodedValue}`
            case "multi":
                return obj.value.map((value, index) => {
                    const encodedValue = encodeURIComponent(value)
                    return `${encodedKey}[${index}]=${encodedValue}`
                }).join("&")
            case "multikey":
                return obj.value.map((value, index) => {
                    const encodedValue = encodeURIComponent(value)
                    return `${encodedValue}=1`
                }).join("&")
            case "range":
                const encodedKeyFrom = encodeURIComponent( key.includes("_") ? "min_" + key : "min" + key )
                const encodedKeyTo = encodeURIComponent(key.includes("_") ? "max_" + key : "max" + key )
                const from = obj.value.from ? encodedKeyFrom + "=" + obj.value.from : null
                const to = obj.value.to ? encodedKeyTo + "=" + obj.value.to : null
                return [from,to].filter(obj => !!obj).join("&")
        }

    }).filter(obj => !!obj).join("&")
    
    return baseURL+params
}