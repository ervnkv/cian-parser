// UI
import { Link, Stack } from "@mui/material";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../store";
// Компоненты
import { Region } from "./components/region";
import { Category } from "./components/category";
import { FlatType } from "./components/flatType";
import { FlatRoom } from "./components/flatRoom";
import { SuburbanHeating } from "./components/suburbanHeating";
import { SuburbanCommunication } from "./components/CommunicationType";
import { SuburbanType } from "./components/suburbanType";
import { OfficeType }  from "./components/officeType";
import { Price } from "./components/price";
import { Square } from "./components/square";
import { ButtonSearch } from "./components/buttonSearch";
import { ButtonExport } from "./components/buttonExport";


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
        <SuburbanCommunication />
        <OfficeType />
        <Price/>
        <Square/>
      
        <ButtonSearch />

        <Link variant="caption" sx={{wordWrap: "break-word"}} href={url}>
            {url}
        </Link>

        <ButtonExport />
    </Stack>
  )
}
