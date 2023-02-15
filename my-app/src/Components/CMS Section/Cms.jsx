import Navigation from "./Navigation/Navigation";
import MainWrapper from "./mainWrapper/MainWrapper"
import { Box } from "@mui/system";


export default function CMS() {
    return (
        <Box height={"100vh"} width={"100vw"} >
            <Box display={"flex"}>
                <Navigation />
                <MainWrapper />
            </Box>
        </Box>
    )
}