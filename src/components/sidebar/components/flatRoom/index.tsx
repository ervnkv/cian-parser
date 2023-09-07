// Компоненты
import { SelectSingle } from "../../../lowLevel/selectSingle";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store";
import { setData } from "../../../../store/form";
import { SelectMulti } from "../../../lowLevel/selectMulti";
import { OfferTypeItem } from "../category";
// Типы
type RoomItem = {
  id: string
  desc: string
}
const roomItems: RoomItem[] = [
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

type Props = {}

export const FlatRoom = ({}: Props) => {
  const dispatch = useAppDispatch()
  

  const {room, offer_type} = useAppSelector(state => state.form.data)

  return (
    <>
    {offer_type?.value as OfferTypeItem["id"] === "flat" && 
    <SelectMulti
        label="Комнаты"
        items={roomItems}
        item_id={"id"}
        item_desc={"desc"}
        value={room?.value || []}
        onChange={value => dispatch(setData({
          room: {
            value_type: "multi",
            value: value
          }
        }))}
    />}
    </>
  )
}
