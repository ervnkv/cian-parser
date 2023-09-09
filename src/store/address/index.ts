import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchResult, Suggestion } from "./types";


const initialState = {
    searchString: null as string | null,
    searchResult: null as Suggestion[] | null,
    searchAddress: null as Suggestion | null
}
const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setSearchString(state, action: PayloadAction<string | null>) {
            state.searchString = action.payload
            state.searchAddress = null
        },
        setSearchAddress(state, action: PayloadAction<Suggestion | null>) {
            state.searchAddress = action.payload
            state.searchString = action.payload?.value || null
            state.searchResult = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(isFulfilled, (state, action: PayloadAction<SearchResult>) => {
                if (action.payload.suggestions.length !== 0) {
                    state.searchResult = action.payload.suggestions
                } else {
                    state.searchResult = null
                }
                state.searchAddress = null
            })
            .addMatcher(isRejected, (state, action: PayloadAction<SearchResult>) => {
                state.searchResult = null
                state.searchAddress = null
            })
    }
})

const endpoint = "address/"

function isFulfilled(action: AnyAction) {
    return action.type.includes(endpoint) && action.type.includes("fulfilled")
}
function isRejected(action: AnyAction) {
    return action.type.includes(endpoint) && action.type.includes("rejected")
}

export const {
    setSearchString,
    setSearchAddress
} = addressSlice.actions

export default addressSlice.reducer