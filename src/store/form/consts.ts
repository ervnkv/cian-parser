import { Form, OfferTypeFlat, OfferTypeOffices, OfferTypeSuburban,  } from "./types";



type OfferTypeItem = {
    id: Form["offer_type"]
    desc: string
}
export const constOfferTypeItems: OfferTypeItem[] = [
    {
        id: "flat",
        desc: "Квартиры"
    },
    {
        id: "suburban",
        desc: "Загородное"
    },
    {
        id: "offices",
        desc: "Коммерческое"
    },
]



type FlatTypes = {
    id: OfferTypeFlat["object_type[0]"]
    desc: string
}
export const constFlatTypes: FlatTypes[] = [
    {
        id: "1",
        desc: "Квартира во вторичке"
    },
    {
        id: "2",
        desc: "Квартира в новостройке"
    },
]

type FlatParams = {
    id: OfferTypeFlat["room"]
    desc: string
}
export const constFlatParams: FlatParams[] = [
    {
        id: "room0",
        desc: "Комната"
    },
    {
        id: "room1",
        desc: "1-Комнатная квартира"
    },
    {
        id: "room2",
        desc: "2-Комнатная квартира"
    },
    {
        id: "room3",
        desc: "3-Комнатная квартира"
    },
    {
        id: "room4",
        desc: "4-Комнатная квартира"
    },
    {
        id: "room5",
        desc: "5-Комнатная квартира"
    },
    {
        id: "room6",
        desc: "6-Комнатная квартира"
    },
    {
        id: "room8",
        desc: "Доля"
    },
    {
        id: "room7",
        desc: "Свободная планировка"
    },
    {
        id: "room9",
        desc: "Студия"
    },
]

type SuburbanTypes = {
    id: OfferTypeSuburban["object_type[0]"]
    desc: string
}
export const constSuburbanTypes: SuburbanTypes[] = [
    {
        id: "1",
        desc: "Дом, дача"
    },
    {
        id: "2",
        desc: "Часть дома"
    },
    {
        id: "3",
        desc: "Участок"
    },
    {
        id: "4",
        desc: "Таунхаус"
    },
]

type HeatingTypes = {
    id: OfferTypeSuburban["heating_type[0]"]
    desc: string
}
export const constHeatingTypes: HeatingTypes[] = [
    {
        id: '2',
        desc: 'Центральное газовое'  
    },
    {
        id: '3',
        desc: 'Угольное'  
    },
    {
        id: '4',
        desc: 'Печь'  
    },
    {
        id: '5',
        desc: 'Камин'  
    },
    {
        id: '6',
        desc: 'Электрическое'  
    },
    {
        id: '6300',
        desc: 'Автономное газовое'  
    },
    {
        id: '6301',
        desc: 'Дизельное'  
    },
    {
        id: '6302',
        desc: 'Твердотопливное'  
    },
    {
        id: '1',
        desc: 'Без отопления'  
    },
]

type OfficesTypes = {
    id: OfferTypeOffices["office_type[0]"]
    desc: string
}
export const constOfficesTypes: OfficesTypes[] = [
    {
        id: "1",
        desc: "Офис",
    },
    {
        id: "2",
        desc: "Торговая площадь",
    },
    {
        id: "3",
        desc: "Склад",
    },
    {
        id: "4",
        desc: "Общепит",
    },
    {
        id: "5",
        desc: "Помещение свободного назначения",
    },
    {
        id: "6",
        desc: "Гараж",
    },
    {
        id: "7",
        desc: "Производство",
    },
    {
        id: "9",
        desc: "Автосервис",
    },
    {
        id: "11",
        desc: "Здание",
    },
    {
        id: "12",
        desc: "Бытовые услуги",
    },
]