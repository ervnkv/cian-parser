// UI
import { Alert, Box, Card, CardContent, CircularProgress, Stack, Typography } from "@mui/material";
// Компоненты
import { MainCard } from "./main-components/mainCard";
// Redux-toolkit
import { useAppSelector } from "../store";


type Props = {
    width?: string | number
}
export const Main = ({width}: Props) => {
  const {items, status, statusText} = useAppSelector(state => state.parse)

  return (
    <Stack 
      direction={"column"}
      width={width || "100%"}
      position={"relative"} 
      sx={{
          background: "hsl(0,0%,12%)",
          p:"1rem",
      }}
    >
      {items && items.length !== 0 && status === "ok" && 
        <Box sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap:"1rem",
          width: "100%",
          overflowX: "hidden",
          overflowY: "scroll",
        }}>
          {items.map(item => <MainCard key={item.id} item={item}/>)}
        </Box>
      }

      {status === "pending" &&     
        <Box mx={"auto"} my={"auto"}>
          <CircularProgress />
        </Box>      
      }

      {status === "error" &&     
        <Alert severity="error">{statusText}</Alert>     
      }
  </Stack>
  )
}
