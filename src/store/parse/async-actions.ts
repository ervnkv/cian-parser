import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { CianParseItem } from "./types";

const parser = new DOMParser();

export const parseCian = createAsyncThunk("parse/cian",
    async (url: string): Promise<CianParseItem[]> => {
      const response = await axios.get("https://fuck-cors.vercel.app/api", {data:{"URL": url}})
      const responseDocument = parser.parseFromString(response.data, 'text/html')
      const scriptObjects = [...responseDocument.getElementsByTagName('script')]

      const scriptObject = scriptObjects.find(obj => {
        const firstText = obj.text.slice(0, 200)
        return firstText.includes("serp") && firstText.includes(".concat")
      })
      const scriptText = scriptObject ? scriptObject.text : ""
      const start = "concat("
      const end = ")"

      let json = ""
      const startIndex = scriptText.indexOf(start) + start.length;
      if (startIndex !== -1) {
        const endIndex = scriptText.lastIndexOf(end) - 1;
        if (endIndex !== -1) {
          const extracted = scriptText.substring(startIndex, endIndex + end.length);
          json = extracted
        }
      }
      const array = JSON.parse(json)
      const cianOffers = array.find((obj: any) => obj.key === "initialState")?.value?.results?.offers

      return cianOffers
    })

    