// Компоненты
import { SelectMulti } from "../../../lowLevel/selectMulti"
import { items } from "./items"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store"
import { setData } from "../../../../store/form"

type Props = {}

export const SuburbanCommunication = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {communicationtype, offer_type} = useAppSelector(state => state.form.data)

  return (
    <>
    {offer_type?.value === "suburban" && 
    <SelectMulti
        label="Коммуникации"
        items={items}
        item_id={"id"}
        item_desc={"desc"}
        value={communicationtype?.value || []}
        onChange={value => dispatch(setData({
          communicationtype: {
            value_type: "multikey",
            value: value
          }
        }))}
    />}
    </>
  )
}