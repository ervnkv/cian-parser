
export type Form = General & Realty & Price & Area & Coordinates

// Основные параметры
type General = {
    deal_type: "sale"
    engine_version: 2
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