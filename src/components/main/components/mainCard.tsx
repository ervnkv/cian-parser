// UI
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
// Компоненты
import { Carousel } from "./carousel";
// Типы
import { CianParseItem } from "../../../store/parse/types";


type Props = {
    item: CianParseItem
}
export const MainCard = ({item}: Props) => {
  console.dir(item)

  const Currency = (number: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number)
  const urls = item?.photos.map(obj => obj.fullUrl)
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
            <Carousel urls={urls || []}/>
            
            <Box sx={{
              display: "grid",
              gridTemplateRows: "1rem 13rem 2rem",
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
