export type Form = {
    deal_type: FormParamSingle
    engine_version: FormParamSingle
    region: FormParamSingle
    offer_type?: FormParamSingle
    object_type?: FormParamMulti
    room?: FormParamMultiKey
    office_type?: FormParamMulti
    heating_type?: FormParamMulti
    price?: FormParamRange
}

// Параметры недвижимости

type Realty = OfferTypeFlat | OfferTypeSuburban | OfferTypeOffices



export type OfferTypeFlat = {
    "offer_type"?: "flat"
    "object_type[0]"?: Value1_2
    "room"?: "room0" | "room1" | "room2" | "room3" | "room4" | "room5" | "room6" | "room7" | "room8" | "room9"
}
// Параметр с массивом значений. object_type: {value: [2,3]} => object_type=2&object_type=3
type FormParamMulti = {
    value_type: "multi"
    value: string[]
}
// Параметр с массивом ключей. room: {value: [room0,room1]} => room0=1&room1=1
type FormParamMultiKey = {
    value_type: "multikey"
    value: string[]
}



// Значения

type Value1_2 = "1" | "2"
type Value1_4 = "1" | "2" | "3" | "4"
type Value1_12 = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"
type Value1_6 = "1" | "2" | "3" | "4" | "5" | "6" | "6300" | "6301" | "6302"


// Неиспользуемые фильтры (пока)
// Цена
type Price = {
    currency?: 2
    minprice?: number
    maxprice?: number
}
// Площадь
type Area = {
    minarea?: number
    maxarea?: number
}
// Координаты (надо удалить)
type Coordinates = {
    lat?: number
    lng?: number
}