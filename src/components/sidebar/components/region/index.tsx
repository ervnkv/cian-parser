// Компоненты
import { SelectSingle } from "../../../lowLevel/selectSingle";
import { regionItems } from "./items";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store";
import { setData } from "../../../../store/form";
// Типы
export type RegionItem = {
  id: number,
  fullName: string,
  displayName: string,
  name: string,
  namePrepositional: string,
  hasMetro: boolean,
  hasHighway: boolean,
  hasDistricts: boolean,
  hasRegionalDistricts: boolean,
  parentId: number | null,
  mainTownId: number | null,
  lat: number,
  lng: number,
  boundedBy: {
      lowerCorner: {
          lat: number,
          lng: number
      },
      upperCorner: {
          lat: number,
          lng: number
      }
  }
}

type Props = {}

export const Region = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {region} = useAppSelector(state => state.form.data)

  return (
    <>
    <SelectSingle
        label="Регион"
        items={regionItems}
        item_id={"id"}
        item_desc={"fullName"}
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
