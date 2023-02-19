import { Typography, Box } from "@mui/material"
import { useState } from "react"



export default function TestimonialCircle({wid,setWid}) {
    // const [wid,setWid] = useState(450)
    return (
        <Box flexShrink={"0"} sx={{ transition: ".3s",overflowX:"hidden" }} position={"relative"} height={"9vw"} width={`${wid}vw`}>
            <Box position={"absolute"} left={"0"} width={"450px"} display={"flex"} gap={"20px"}>
                <Box sx={{ height: "9vw", width: "9vw", background: "white", borderRadius: "50%", flexShrink: "0",boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" }}></Box>
                <Box sx={{ width: "325px", flexShrink: "0", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                    <Typography fontSize={["20px","22px","24px","35px"]} sx={{ fontfamily: "Piedra", fontWeight: "800",color:"#564fa4" }}>Sumit Saurabh</Typography>
                    <Typography fontSize={["10px","12px","15px","20px"]} sx={{ fontfamily: "Raleway", fontWeight: "500", color: "#564fa4" }}>Microsoft</Typography>
                </Box>
            </Box>
        </Box>
    )
}