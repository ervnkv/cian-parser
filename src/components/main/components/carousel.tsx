// UI
import { Box, Button, Card, CardContent, MobileStepper, Stack, Typography } from "@mui/material";
// Компоненты
// Типы
import { CianParseItem } from "../../../store/parse/types";
import { ReactNode, useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";


type Props = {
    urls: string[]
}
export const Carousel = ({urls}: Props) => {
    const [activeStep, setActiveStep] = useState(0)

    const count = urls.length
    return (
        <>
        {count === 0 && <Typography alignSelf={"center"} textAlign={"center"}>Нет фото</Typography>}
        {count !== 0 &&
        <Box 
            sx={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                width: "100%", 
                position: "relative",
                backgroundImage: `url(${urls[activeStep]})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "contain"
            }}
        >
            <MobileStepper
                variant="text"
                steps={count}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: "100%", position: "absolute", bottom: 0, background: "hwb(0 0% 100% / 0.2)"}}
                backButton={
                    <Button 
                        disabled={activeStep === 0} 
                        onClick={() => setActiveStep((prev) => prev - 1)} 
                        sx={{px:0, minWidth: "5rem"}}
                    >
                        <KeyboardArrowLeft />
                    </Button>
                }
                nextButton={
                    <Button 
                        disabled={activeStep === (count - 1)} 
                        onClick={() => setActiveStep((prev) => prev + 1)}
                        sx={{px:0, minWidth: "5rem"}}
                    >
                        <KeyboardArrowRight/>
                    </Button>
                }
            />
        </Box>
        }
        </>
    )
}
