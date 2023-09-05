
export type Form = General & Realty & Price & Area & Coordinates & Region

// Основные параметры
type General = {
    deal_type: "sale"
    engine_version: 2
}
// Регион
type Region = {
    region: number
}
export type RegionItem = {
    id: number,
    fullName: string,
    displayName: string,
    name: string,
    namePrepositional: string,
    hasMetro: boolean,
    hasHighway: boolean,
    hasDistricts: boolean,
    hasRegionalDistricts: boolean,
    parentId: number | null,
    mainTownId: number | null,
    lat: number,
    lng: number,
    boundedBy: {
        lowerCorner: {
            lat: number,
            lng: number
        },
        upperCorner: {
            lat: number,
            lng: number
        }
    }
}
// Параметры недвижимости
type Realty = OfferTypeFlat | OfferTypeSuburban | OfferTypeOffices
export type OfferTypeFlat = {
    "offer_type"?: "flat"
    "object_type[0]"?: Value1_2
    "room"?: "room0" | "room1" | "room2" | "room3" | "room4" | "room5" | "room6" | "room7" | "room8" | "room9"
}
export type OfferTypeSuburban = {
    "offer_type"?: "suburban"
    "object_type[0]"?: Value1_4
}
export type OfferTypeOffices = {
    "offer_type"?: "offices"
    "office_type[0]"?: Value1_12
}
type Value1_2 = "1" | "2"
type Value1_4 = "1" | "2" | "3" | "4"
type Value1_12 = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"


// Параметры фильтров
type Price = {
    currency?: 2
    minprice?: number
    maxprice?: number
}
type Area = {
    minarea?: number
    maxarea?: number
}
type Coordinates = {
    lat?: number
    lng?: number
}
