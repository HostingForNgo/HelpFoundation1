import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import CenterCard from "./CenterCard"
export default function Centers() {
    return (
        <Box overflow={"hidden"} minHeight={["100vw", "65vw", "45vw"]} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }} justifyContent={"space-evenly"}>
            <Typography sx={{ marginTop: "20px", letterSpacing: "4px", color:"rgb(86, 79, 164)" }} fontWeight="700" variant="h4" mb={"20px"}>OUR CENTERS</Typography>
            <Box flexDirection={["column", "row", "row", "row"]} width={"calc(100vw - 20px)"} display={"flex"} height="80%" alignItems={"center"} gap={"20px"} justifyContent="space-evenly">
                <CenterCard linkk={"Projects"} text={"Get in Touch"} imgSrc={"https://www.solutionsgc.com/wp-content/uploads/home-office-design-tips-scaled-e1669187800583.jpg"}></CenterCard>
                <CenterCard linkk={"Projects"} text={"Donate"} imgSrc={"https://www.solutionsgc.com/wp-content/uploads/home-office-design-tips-scaled-e1669187800583.jpg"}></CenterCard>
                <CenterCard linkk={"Projects"} text={"Volunteer"} imgSrc={"https://www.solutionsgc.com/wp-content/uploads/home-office-design-tips-scaled-e1669187800583.jpg"}></CenterCard>
            </Box>
            <Box height={"20px"}></Box>
        </Box>
    )
}