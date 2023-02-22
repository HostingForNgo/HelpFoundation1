import { Box } from "@mui/system";
import React from 'react';
import { Typography } from "@mui/material";
import VisionCard from "./VisionCard";
export default function Certificates() {
    return (
        <Box width={"100%"} minHeight={"100vh"} alignItems={"center"} display={"flex"} gap={"20px"} flexDirection={"column"}>
            <Typography fontWeight={"900"} fontSize={"40px"} m={"20px 0"} color={"rgb(86, 79, 164)"}>Vision</Typography>
            <Box width={"90%"} display={"flex"} flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignContent={"flex-start"}>

                <VisionCard/>
                <VisionCard/>
                <VisionCard/>
                <VisionCard/>
                <VisionCard/>

            </Box>
            <Box></Box>
        </Box>
    )
}