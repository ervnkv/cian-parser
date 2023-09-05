import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CianParseItem } from "./types";



const initialState = {
    items: null as CianParseItem[] | null,
    status: "" as "" | "ok" | "error" | "pending",
    statusText: ""
}
const parseSlice = createSlice({
    name: 'parse',
    initialState,
    reducers: {
        // setSearchString(state, action: PayloadAction<string | null>) {
        //     state.searchString = action.payload
        //     state.searchParse = null
        // },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(isFulfilled, (state, action: PayloadAction<CianParseItem[]>) => {
                if (action.payload.length !== 0) {
                    state.items = action.payload
                } else {
                    state.items = null
                }
                state.status = "ok"
                state.statusText = ""
            })
            .addMatcher(isRejected, (state, action: AnyAction) => {
                state.status = "error"
                state.statusText = action.error.message
            })
            .addMatcher(isPending, (state) => {
                state.status = "pending"
                state.statusText = ""
            })
    }
})

const endpoint = "parse/"

function isFulfilled(action: AnyAction) {
    return action.type.includes(endpoint) && action.type.includes("fulfilled")
}
function isRejected(action: AnyAction) {
    return action.type.includes(endpoint) && action.type.includes("rejected")
}
function isPending(action: AnyAction) {
    return action.type.includes(endpoint) && action.type.includes("pending")
}

export const {
    // setSearchString,
    // setSearchParse
} = parseSlice.actions

export default parseSlice.reducer