import { Box, Typography } from "@mui/material";



export default function MobileViewTestimonialsCircle({width}) {
    return (
        <Box width={`${20}%`} height={"100%"} display={"flex"} alignItems={"center"} flexDirection={"column"}  paddingTop="10px">
            <Box sx={{ height: "80px", width: "80px", background: "white", borderRadius: "50%", flexShrink: "0",boxShadow:"rgb(6 24 44 / 40%) 0px 0px 0px 2px, rgb(6 24 44 / 65%) 0px 4px 6px -1px, rgb(255 255 255 / 8%) 0px 1px 0px inset" }}></Box>
            <Box sx={{width: "100%", flexShrink: "0", display: "flex", alignItems:"center" ,flexDirection: "column", justifyContent: "space-evenly" }}>
                <Typography fontSize={["24px"]} sx={{ fontfamily: "Roboto, sans-serif", fontWeight: "500", color: "rgb(86, 79, 164)"  }}>Sumit Saurabh</Typography>
                <Typography fontSize={["15px"]} sx={{ fontfamily: "Roboto, sans-serif", fontWeight: "500", color: "rgb(86, 79, 164)" }}>Microsoft</Typography>
            </Box>
        </Box>
    )
}