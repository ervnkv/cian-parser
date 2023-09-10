// Компоненты
import { RangeField } from "../../../lowLevel/rangeField"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store"
import { setData } from "../../../../store/form"


type Props = {}

export const Square = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {square} = useAppSelector(state => state.form.data)

  return (
    <RangeField 
      label="Площадь"
      value_from={square?.value.from}
      value_to={square?.value.to}
      onChange={value => dispatch(setData({
            square: {
              value_type: "range",
              value: value
            }
      }))}
      endAdornment="м²"
    />
  )
}
