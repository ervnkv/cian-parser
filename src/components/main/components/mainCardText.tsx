// UI
import { Button, Stack, Typography } from "@mui/material";
// Компоненты
// Типы
import { CianParseItem } from "../../../store/parse/types";
import { useAppSelector } from "../../../store";


type Props = {
    item: CianParseItem
    width?: number | string
}
export const MainCardText = ({item, width = "100%"}: Props) => {

  const Currency = (number: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number)

  const {region, mainTown} = useAppSelector(state => state.form.region)

  const {lat, lng} = item.geo.coordinates

  const coordinates = ` (${lat}, ${lng})`
  const fullAddress = item.geo.address
    .filter(obj => obj.type === "location")
    .map(obj => obj.shortName)
    .join(", ") + coordinates
  
  const getDistance = (lat_from?: number, lng_from?: number, lat_to?: number, lng_to?: number) => {
    if (!lat_from || !lng_from || !lat_to || !lng_to) return null
    return Math.sqrt(Math.pow(lat_to - lat_from, 2) + Math.pow(lng_to - lng_from, 2))
  }

  const distance = mainTown ? getDistance(mainTown.lat, mainTown.lng, lat, lng) : getDistance(region?.lat, region?.lng, lat, lng)

  return (
    <Stack direction={"column"} width={width} position={"relative"}>
      <Typography variant="caption" width={"95%"}>{fullAddress}</Typography>
      <Typography variant="caption">
          {distance ? distance + " км?" : "-"}
        </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="caption">
          {item.totalArea ? item.totalArea + " м²" : "-"}
        </Typography>

        <Typography variant="caption">
          {item.totalArea ? Currency(item.bargainTerms.priceRur / parseFloat(item.totalArea)) + " / м²" : "-"}
        </Typography>
        <Typography variant="caption">
          {Currency(item.bargainTerms.priceRur)}
        </Typography>
      </Stack>
      
      
      {/* <Typography variant="caption" sx={{whiteSpace: "break-spaces", overflowY: "auto"}}>
        {item.description}
      </Typography> */}
      <Button href={item.fullUrl} sx={{ fontSize: 12, mb: 0, mx: "auto"}} variant="outlined">
        Ссылка на Циан
      </Button>
    </Stack>
  )
}
