// Компоненты
import { SelectSingle } from "../../../lowLevel/selectSingle";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store";
import { setData } from "../../../../store/form";
import { SelectMulti } from "../../../lowLevel/selectMulti";
import { OfferTypeItem } from "../category";
// Типы
type ObjectTypeItem = {
  id: string
  desc: string
}
const objectTypeItems: ObjectTypeItem[] = [
  {
    id: "1",
    desc: "Квартира во вторичке"
},
{
    id: "2",
    desc: "Квартира в новостройке"
},
]

type Props = {}

export const FlatCondition = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {object_type, offer_type} = useAppSelector(state => state.form.data)

  return (
    <>
    {offer_type?.value as OfferTypeItem["id"] === "flat" && 
    <SelectMulti
        label="Состояние"
        items={objectTypeItems}
        item_id={"id"}
        item_desc={"desc"}
        value={object_type?.value || []}
        onChange={value => dispatch(setData({
          object_type: {
            value_type: "multi",
            value: value
          }
        }))}
    />}
    </>
  )
}
