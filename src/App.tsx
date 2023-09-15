// UI
import { Stack } from "@mui/material";
// Компоненты
import { Main } from "./components/main";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <Stack 
      direction={"row"} 
      height={"100dvh"} 
      width={"100dvw"}
    >
      <Sidebar width={"25rem"}/>
      <Main/>
    </Stack>
  )
}

export default App
