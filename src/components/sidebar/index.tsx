// UI
import { Button, Link, Stack } from "@mui/material";
// Компоненты
import { Region } from "./components/region";
import { Category } from "./components/category";
import { FlatType } from "./components/flatType";
import { FlatRoom } from "./components/flatRoom";
import { SuburbanHeating } from "./components/suburbanHeating";
import { SuburbanType } from "./components/suburbanType";
import { OfficeType }  from "./components/officeType";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../store";
import { parseCian } from "../../store/parse/async-actions";
import { Price } from "./components/price";


type Props = {
    width?: string | number
}
export const Sidebar = ({width}: Props) => {
  const dispatch = useAppDispatch()
  
  const {url} = useAppSelector(state => state.form)

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
        <FlatType />
        <FlatRoom />
        <SuburbanType />
        <SuburbanHeating />
        <OfficeType />
        <Price/>
      
        <Button variant={"outlined"} disabled={!url} onClick={url ? () => dispatch(parseCian(url)) : undefined}>
            Поиск
        </Button>

        <Link variant="caption" sx={{wordWrap: "break-word"}} href={url}>
            {url}
        </Link>
    </Stack>
  )
}
