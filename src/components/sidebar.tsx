// React
// UI
import { Button, Stack, Typography } from "@mui/material";
// Компоненты
import SelectBase from "../components/low-level/selectBase";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../store";
import { setData } from "../store/form";
import { constFlatParams, constFlatTypes, constOfferTypeItems, constOfficesTypes, constSuburbanTypes } from "../store/form/consts";
import { parseCian } from "../store/parse/async-actions";
// Типы



type Props = {
    width?: string | number
}
export const Sidebar = ({width}: Props) => {
  const dispatch = useAppDispatch()
  
  const {data, urlCian} = useAppSelector(state => state.form)
//   const [search, setSearch] = useState("")

//   const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value)
//     const value = e.target.value
//     const coords = value.split(/[.,:;\s]+/)
//     const lat = parseFloat(coords[0])
//     const lng = parseFloat(coords[1])
//     if (lat && lng) {
//       dispatch(setData({lat: lat}))
//       dispatch(setData({lng: lng}))
//     } else {
//       dispatch(setData({lat: undefined}))
//       dispatch(setData({lng: undefined}))
//     }
//   }

  const handleClick = async () => {
    // setUrl("cian-api/cat.php?" + createUrl(data))/
  }


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
        {/* <TextField
            label='Координаты объекта'
            placeholder='53.238738, 50.275480'
            variant="outlined"
            value={search}
            onChange={handleChangeSearch}
            inputProps={{sx:{p: "0.4rem"}}}
            helperText={(search !== "" && (!data.lat || !data.lng)) ? "Некорректные координаты" : ""}
        /> */}
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
        <Button 
            variant={"outlined"} 
            disabled={!urlCian}
            onClick={urlCian ? () => dispatch(parseCian(urlCian)) : undefined}
        >Поиск</Button>

        {/* <Typography variant="caption" sx={{wordWrap: "break-word"}}>{urlCian}</Typography> */}
    </Stack>
  )
}
