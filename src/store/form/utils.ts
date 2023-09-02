import { Form } from "./types"

const baseCianProxyURL = "cian-api/cat.php?"
export const createUrlCian = (obj: Form) => {
    const queryStringArray = Object.entries(obj).filter(([key, value]) => value).map(([key, value]) => {
      const encodedKey = encodeURIComponent(key)
      const encodedValue = encodeURIComponent(value)
      if (key.includes("room")) {
        return `${encodedValue}=1`
      }
      return `${encodedKey}=${encodedValue}`
    })
    
    return baseCianProxyURL + queryStringArray.join('&')
}