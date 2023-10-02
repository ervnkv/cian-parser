// UI
import { Link, Stack } from "@mui/material";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../store";
// Компоненты
import { Region } from "./components/region";
import { DealType } from "./components/dealType";
import { Category } from "./components/category";
import { FlatType } from "./components/flatType";
import { FlatRoom } from "./components/flatRoom";
import { SuburbanHeating } from "./components/suburbanHeating";
import { SuburbanCommunication } from "./components/сommunication";
import { SuburbanType } from "./components/suburbanType";
import { OfficeType }  from "./components/officeType";
import { Price } from "./components/price";
import { Area } from "./components/area";
import { ButtonSearch } from "./components/buttonSearch";
import { ButtonExport } from "./components/buttonExport";
import { ButtonHide } from "./components/buttonHide";


type Props = {}
export const Sidebar = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {url, showMore} = useAppSelector(state => state.form)

  return (
    <Stack
        direction={"row"}
        gap={1} 
        sx={theme => {return{
            background: "hsl(0,0%,10%)",
            p:"1rem",
            width: showMore ? "35rem" : "auto",
            [theme.breakpoints.down('sm')]: {
                p: "0.5rem",
                width: showMore ? "100vw" : "auto",
            },
        }}}
    >
        {showMore &&
            <Stack
                sx={theme => {return{
                    gap:"4rem",
                    [theme.breakpoints.down('sm')]: {
                        gap: "1rem",
                    },
                }}} 
            >
                <Region />
                <DealType />
                <Category />
                <FlatType />
                <FlatRoom />
                <SuburbanType />
                <SuburbanHeating />
                <SuburbanCommunication />
                <OfficeType />
                <Price/>
                <Area/>
            
                <ButtonSearch />

                <Link variant="caption" alignSelf={"center"} sx={{wordWrap: "break-word"}} href={url}>
                    Ссылка на поиск Циан
                </Link>

                <ButtonExport />
            </Stack>
        }
        <ButtonHide />
    </Stack>
  )
}
