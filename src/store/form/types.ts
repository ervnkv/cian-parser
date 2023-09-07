
export type Form = {
    deal_type: FormParamSingle<"sale">
    engine_version: FormParamSingle<"2">
    region: FormParamSingle
    offer_type?: FormParamSingle<"flat" | "suburban" | "offices">
    object_type?: FormParamMulti<["1" | "2" | "3" | "4"]>
    room?: FormParamMulti<["room0" | "room1" | "room2" | "room3" | "room4" | "room5" | "room6" | "room7" | "room8" | "room9"]>
}


type FormParamSingle<T = string> = {
    value_type: "single", 
    value: T
}
type FormParamMulti<T = string[]> = {
    value_type: "multi"
    value: T
}
type FormParamRange = {
    value_type: "range", 
    value: {
        from: number, 
        to: number,
    }
}

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
    "heating_type[0]"?: Value1_6
}
export type OfferTypeOffices = {
    "offer_type"?: "offices"
    "office_type[0]"?: Value1_12
}


// Значения
type Value1_2 = "1" | "2"
type Value1_4 = "1" | "2" | "3" | "4"
type Value1_12 = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"
type Value1_6 = "1" | "2" | "3" | "4" | "5" | "6" | "6300" | "6301" | "6302"


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








// export type Form = General & Realty & Price & Area & Coordinates & Region

// // Основные параметры
// type General = {
//     deal_type: "sale"
//     engine_version: 2
// }

// // Параметры недвижимости
// type Realty = OfferTypeFlat | OfferTypeSuburban | OfferTypeOffices

// export type OfferTypeFlat = {
//     "offer_type"?: "flat"
//     "object_type[0]"?: Value1_2
//     "room"?: "room0" | "room1" | "room2" | "room3" | "room4" | "room5" | "room6" | "room7" | "room8" | "room9"
// }
// export type OfferTypeSuburban = {
//     "offer_type"?: "suburban"
//     "object_type[0]"?: Value1_4
//     "heating_type[0]"?: Value1_6
// }
// export type OfferTypeOffices = {
//     "offer_type"?: "offices"
//     "office_type[0]"?: Value1_12
// }


// // Значения
// type Value1_2 = "1" | "2"
// type Value1_4 = "1" | "2" | "3" | "4"
// type Value1_12 = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"
// type Value1_6 = "1" | "2" | "3" | "4" | "5" | "6" | "6300" | "6301" | "6302"


// // Регион
// type Region = {
//     region: number
// }
// export type RegionItem = {
//     id: number,
//     fullName: string,
//     displayName: string,
//     name: string,
//     namePrepositional: string,
//     hasMetro: boolean,
//     hasHighway: boolean,
//     hasDistricts: boolean,
//     hasRegionalDistricts: boolean,
//     parentId: number | null,
//     mainTownId: number | null,
//     lat: number,
//     lng: number,
//     boundedBy: {
//         lowerCorner: {
//             lat: number,
//             lng: number
//         },
//         upperCorner: {
//             lat: number,
//             lng: number
//         }
//     }
// }

// // Неиспользуемые фильтры (пока)
// // Цена
// type Price = {
//     currency?: 2
//     minprice?: number
//     maxprice?: number
// }
// // Площадь
// type Area = {
//     minarea?: number
//     maxarea?: number
// }
// // Координаты (надо удалить)
// type Coordinates = {
//     lat?: number
//     lng?: number
// }

