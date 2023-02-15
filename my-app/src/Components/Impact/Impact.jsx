import { Box } from "@mui/system";
import { useContext } from "react";
import React from 'react';
import { Context } from "../../ContextApi";
import { Typography } from "@mui/material";
import ImpactCard from "./ImpactCard";
export default function Certificates() {
    let { images } = useContext(Context);
    return (
        <Box width={"100%"} minHeight={"100vh"} alignItems={"center"} display={"flex"} gap={"20px"} flexDirection={"column"}>
            <Typography fontWeight={"900"} fontSize={"40px"} m={"20px 0"}>Impact</Typography>
            <Box width={"90%"} display={"flex"} flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignContent={"flex-start"}>

                <ImpactCard/>
                <ImpactCard/>
                <ImpactCard/>
                <ImpactCard/>
                <ImpactCard/>
               

            </Box>
            <Box></Box>
        </Box>
    )
}