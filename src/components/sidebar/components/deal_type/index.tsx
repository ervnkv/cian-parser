// Компоненты
import { SelectSingle } from "../../../lowLevel/selectSingle"
import { items } from "./items"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store"
import { setData } from "../../../../store/form"


type Props = {}

export const DealType = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {deal_type} = useAppSelector(state => state.form.data)

  return (
    <>
    <SelectSingle
        label="Тип сделки"
        items={items}
        item_id={"id"}
        item_desc={"desc"}
        value={deal_type.value}
        onChange={value => dispatch(setData({
          deal_type: {
            value_type: "single",
            value: String(value)
          }
        }))}
    />
    </>
  )
}