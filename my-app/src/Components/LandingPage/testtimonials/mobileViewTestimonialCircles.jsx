import { Box, Typography } from "@mui/material";



export default function MobileViewTestimonialsCircle({width}) {
    return (
        <Box width={`${20}%`} height={"100%"} display={"flex"} alignItems={"center"} flexDirection={"column"}  paddingTop="10px">
            <Box sx={{ cursor: "pointer", height: "80px", width: "80px", background: "white", borderRadius: "50%", flexShrink: "0" }}></Box>
            <Box sx={{width: "100%", flexShrink: "0", display: "flex", alignItems:"center" ,flexDirection: "column", justifyContent: "space-evenly" }}>
                <Typography fontSize={["24px"]} sx={{ fontfamily: "Piedra", fontWeight: "500", color: "white"  }}>Sumit Saurabh</Typography>
                <Typography fontSize={["15px"]} sx={{ fontfamily: "Raleway", fontWeight: "500", color: "white" }}>Microsoft</Typography>
            </Box>
        </Box>
    )
}