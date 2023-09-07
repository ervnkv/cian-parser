// Компоненты
import { SelectSingle } from "../../../lowLevel/selectSingle";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store";
import { setData } from "../../../../store/form";
// Типы
export type OfferTypeItem = {
  id: "flat" | "suburban" | "offices"
  desc: string
}
const offerTypeItems: OfferTypeItem[] = [
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

type Props = {}

export const Category = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {offer_type} = useAppSelector(state => state.form.data)

  return (
    <>
    <SelectSingle
        label="Категория"
        items={offerTypeItems}
        item_id={"id"}
        item_desc={"desc"}
        value={offer_type?.value || ""}
        onChange={value => {
          dispatch(setData({
            offer_type: {
              value_type: "single",
              value: String(value)
            },
            object_type: undefined
          }))
        }}
    />
    </>
  )
}
