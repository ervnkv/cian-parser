export type Form = {
    deal_type: FormParamSingle
    engine_version: FormParamSingle
    region: FormParamSingle
    offer_type?: FormParamSingle
    object_type?: FormParamMulti
    room?: FormParamMultiKey
    office_type?: FormParamMulti
    heating_type?: FormParamMulti
    communicationtype?: FormParamMultiKey
    square?: FormParamRange
    price?: FormParamRange
}

// Параметр с единственным значением. deal_type: {value: 2} => deal_type=2
type FormParamSingle = {
    value_type: "single", 
    value: string
}
// Параметр с массивом значений. object_type: {value: [2,3]} => object_type=2&object_type=3
type FormParamMulti = {
    value_type:  "multi"
    value: string[]
}
// Параметр с массивом ключей. room: {value: [room0,room1]} => room0=1&room1=1
type FormParamMultiKey = {
    value_type: "multikey"
    value: string[]
}

type FormParamRange = {
    value_type: "range", 
    value: {
        from?: number, 
        to?: number,
    }
}