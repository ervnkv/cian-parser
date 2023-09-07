// UI
import { Button, Link, Stack } from "@mui/material";
// Компоненты
import { Region } from "./components/region";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../store";

import { parseCian } from "../../store/parse/async-actions";
import { Category } from "./components/category";
import { FlatCondition } from "./components/flatCondition";
import { FlatRoom } from "./components/flatRoom";
// Типы



type Props = {
    width?: string | number
}
export const Sidebar = ({width}: Props) => {
  const dispatch = useAppDispatch()
  
  const {data, url} = useAppSelector(state => state.form)

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
        <Region />
        <Category />
        <FlatCondition />
        <FlatRoom />
        {/* 

        {data.offer_type === "flat" && 
            <SelectSingle
                items={constFlatParams}
                item_id={"id"}
                item_desc={"desc"}
                label="Тип квартиры"
                name="room"
                value={data.room || null}
                onChange={(field, value) => dispatch(setData({[field]: value}))}
                first_object={{id: null, desc: "Любой"}}
            />
        }
        {data.offer_type === "suburban" && 
            <SelectSingle
                items={constSuburbanTypes}
                item_id={"id"}
                item_desc={"desc"}
                label="Тип загородного"
                name="object_type[0]"
                value={data["object_type[0]"] || null}
                onChange={(field, value) => dispatch(setData({[field]: value}))}
                first_object={{id: null, desc: "Любой"}}
            />
        }

        {data.offer_type === "offices" && 
            <SelectSingle
                items={constOfficesTypes}
                item_id={"id"}
                item_desc={"desc"}
                label="Тип офиса"
                name="office_type[0]"
                value={data["office_type[0]"] || null}
                onChange={(field, value) => dispatch(setData({[field]: value}))}
                
                first_object={{id: null, desc: "Любой"}}
            />
        }

        {data.offer_type === 'suburban' &&
            <SelectSingle
                items={constHeatingTypes}
                item_id={"id"}
                item_desc={"desc"}
                label = "Тип отопления"
                name = "heating_type[0]"
                value = {data["heating_type[0]"] || null}
                onChange = {(field,value) => dispatch(setData({[field]: value}))}
                first_object={{id: null, desc: "Любой"}}
            />

        } */}
        
      
        <Button 
            variant={"outlined"} 
            disabled={!url}
            onClick={url ? () => dispatch(parseCian(url)) : undefined}
        >Поиск</Button>

        <Link 
            variant="caption" 
            sx={{wordWrap: "break-word"}}
            href={url}
        >
            {url}
        </Link>
    </Stack>
  )
}
