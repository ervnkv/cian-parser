// React
import { useState } from "react"
// UI
import { Box, Button, CardMedia, MobileStepper, Typography } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"


type Props = {
    urls: string[]
    width?: number | string
}
export const MainCardCarousel = ({urls, width = "30%"}: Props) => {
    const [activeStep, setActiveStep] = useState(0)

    const count = urls.length
    return (
        <Box
            width={width}
            // height={"100%"}
            sx={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "flex-start", 
                position: "relative",
            }}
        >
            {count === 0 && <Typography alignSelf={"center"} textAlign={"center"}>Нет фото</Typography>}
            {count !== 0 &&
                <>
                    <Box component="img" src={urls[activeStep]} sx={{objectFit: 'cover', position: "absolute", maxWidth: "100%", maxHeight: "100%"}}/>
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
                </>
            }
        </Box>
    )
}
