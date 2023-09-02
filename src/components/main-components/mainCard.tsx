// React
// UI
import { Alert, Box, Button, Card, CardContent, CircularProgress, Stack, Typography } from "@mui/material";

// Компоненты
// Redux-toolkit
import { useAppSelector } from "../../store";
import { CianParseItem } from "../../store/parse/types";
import Carousel from "react-material-ui-carousel";
// Типы


type Props = {
    item: CianParseItem
}
export const MainCard = ({item}: Props) => {
  console.dir(item)
  // const dispatch = useAppDispatch()

  const Currency = (number: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number)

  return (
    <Card variant="outlined" sx={{height: "20rem", background: "hsl(0,0%,15%)"}}>
        <CardContent>
          <Box 
            sx={{
              display: "grid",
              gridTemplateColumns: "20rem auto",
              gap:"1rem",
              width: "100%",
            }}
          >
            <Carousel 
              autoPlay={false} 
              navButtonsAlwaysVisible
            >
              {item.photos.map(obj => (
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    mx: "auto",
                    overflow: "clip"
                  }}
                  src={obj.fullUrl}
                />
              ))}
            </Carousel>
            
            <Box sx={{
              display: "grid",
              gridTemplateRows: "1rem 13rem 2rem",
              // height: "100%",
              gap:"1rem",
            }}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>
                  {item.totalArea + " м²"}
                </Typography>
                <Typography>
                  {Currency(item.bargainTerms.priceRur / parseFloat(item.totalArea)) + " / м²"}
                </Typography>
                <Typography>
                  {Currency(item.bargainTerms.priceRur)}
                </Typography>
              </Stack>
              <Typography variant="caption" sx={{whiteSpace: "break-spaces", overflowY: "auto"}}>
                  {item.description}
                </Typography>
              <Button href={item.fullUrl} sx={{ fontSize: 12, mb: 0}} variant="outlined">
                Ссылка на Циан
              </Button>
            </Box>
          </Box>
        </CardContent>
    </Card>
  )
}
