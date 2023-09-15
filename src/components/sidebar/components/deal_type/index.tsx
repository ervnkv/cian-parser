// Компоненты
import { SelectSingle } from "../../../lowLevel/selectSingle"
import { items } from "./items"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store"
import { setData } from "../../../../store/form"


type Props = {}

export const DealType = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {region} = useAppSelector(state => state.form.data)

  return (
    <>
    <SelectSingle
        label="Тип сделки"
        items={items}
        item_id={"id"}
        item_desc={"desc"}
        value={region.value}
        onChange={value => dispatch(setData({
          region: {
            value_type: "single",
            value: String(value)
          }
        }))}
    />
    </>
  )
}