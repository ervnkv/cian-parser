import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { SearchResult } from "./types";

const axiosClient = axios.create({
    baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest',
})
const apiKey = "Token " + "fe01fa3c98714413598af317acd4bf138fc09211"


export const getAddress = createAsyncThunk("address/getAll",
    async (searchString: string): Promise<SearchResult> => {
        const res = await axiosClient.post("address", {query: searchString}, {headers: {"Authorization": apiKey}});
        return res.data;
    })

