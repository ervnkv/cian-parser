// Компоненты
import { SelectSingle } from "../../../lowLevel/selectSingle";
import { items } from "./items";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store";
import { setData } from "../../../../store/form";

type Props = {}

export const Category = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {offer_type} = useAppSelector(state => state.form.data)

  return (
    <>
    <SelectSingle
        label="Категория"
        items={items}
        item_id={"id"}
        item_desc={"desc"}
        value={offer_type?.value || ""}
        onChange={value => {
          dispatch(setData({
            offer_type: {
              value_type: "single",
              value: value || ""
            },
            // Обнуление параметров при изменении категории
            object_type: undefined,
            room: undefined,
            office_type: undefined,
            heating_type: undefined,
            communication: undefined
          }))
        }}
    />
    </>
  )
}
