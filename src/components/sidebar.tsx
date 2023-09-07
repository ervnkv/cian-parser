// UI
import { Button, Link, Stack, Typography } from "@mui/material";
// Компоненты
import SelectBase from "../components/low-level/selectBase";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../store";
import { setData } from "../store/form";
import { constFlatParams, constFlatTypes, constOfferTypeItems, constOfficesTypes, constSuburbanTypes, constHeatingTypes } from "../store/form/consts";
import { parseCian } from "../store/parse/async-actions";
import { constRegionItems } from "../store/form/constsRegions";
// Типы



type Props = {
    width?: string | number
}
export const Sidebar = ({width}: Props) => {
  const dispatch = useAppDispatch()
  
  const {data, urlCian} = useAppSelector(state => state.form)

  return (
    <Stack 
        direction={"column"} 
        width={width || "100%"} 
        gap={5} 
        position={"relative"} 
        sx={{
            background: "hsl(0,0%,10%)",
            p:"1rem"
        }}
    >
        <SelectBase
            items={constRegionItems}
            item_id={"id"}
            item_desc={"fullName"}
            label="Регион"
            name="region"
            value={String(data.region) || null}
            onChange={(field, value) => dispatch(setData({[field]: Number(value)}))}
        />
        <SelectBase
            items={constOfferTypeItems}
            item_id={"id"}
            item_desc={"desc"}
            label="Категория"
            name="offer_type"
            value={data.offer_type || null}
            onChange={(field, value) => dispatch(setData({[field]: value}))}
        />
        {data.offer_type === "flat" && 
            <SelectBase
                items={constFlatTypes}
                item_id={"id"}
                item_desc={"desc"}
                label="Состояние"
                name="object_type[0]"
                value={data["object_type[0]"] || null}
                onChange={(field, value) => dispatch(setData({[field]: value}))}
                first_object={{"key": null, "text": "Любое"}}
            />
        }
        {data.offer_type === "flat" && 
            <SelectBase
                items={constFlatParams}
                item_id={"id"}
                item_desc={"desc"}
                label="Тип квартиры"
                name="room"
                value={data.room || null}
                onChange={(field, value) => dispatch(setData({[field]: value}))}
                first_object={{"key": null, "text": "Любой"}}
            />
        }
        {data.offer_type === "suburban" && 
            <SelectBase
                items={constSuburbanTypes}
                item_id={"id"}
                item_desc={"desc"}
                label="Тип загородного"
                name="object_type[0]"
                value={data["object_type[0]"] || null}
                onChange={(field, value) => dispatch(setData({[field]: value}))}
                first_object={{"key": null, "text": "Любой"}}
            />
        }

        {data.offer_type === "offices" && 
            <SelectBase
                items={constOfficesTypes}
                item_id={"id"}
                item_desc={"desc"}
                label="Тип офиса"
                name="office_type[0]"
                value={data["office_type[0]"] || null}
                onChange={(field, value) => dispatch(setData({[field]: value}))}
                first_object={{"key": null, "text": "Любой"}}
            />
        }

        {data.offer_type === 'suburban' &&
            <SelectBase
                items={constHeatingTypes}
                item_id={"id"}
                item_desc={"desc"}
                label = "Тип отопления"
                name = "heating_type"
                value = {data["heating_type"] || null}
                onChange = {(field,value) => dispatch(setData({[field]: value}))}
                first_object={{"key": null, "text": "Любой"}}
            />

        }
        <Button 
            variant={"outlined"} 
            disabled={!urlCian}
            onClick={urlCian ? () => dispatch(parseCian(urlCian)) : undefined}
        >Поиск</Button>

        <Link 
            variant="caption" 
            sx={{wordWrap: "break-word"}}
            href={urlCian}
        >
            {urlCian}
        </Link>
    </Stack>
  )
}
