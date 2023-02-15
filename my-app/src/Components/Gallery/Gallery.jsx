import { Box } from "@mui/system";
import { useContext } from "react";
import React from 'react';
import { Context } from "../../ContextApi";
import { Typography } from "@mui/material";
export default function Gallery() {
    // let { images } = useContext(Context);
    return (
        <Box width={"100%"} alignItems={"center"} display={"flex"} gap={"20px"} flexDirection={"column"} minHeight={"100vh"}>
            <Typography fontWeight={"900"} fontSize={"40px"} m={"20px 0"}>Gallery</Typography>
            {/* {
                images.map((i)=>(
                    <GalleryCard key={i.img} img={i.img}/>
                ))
            } */}
            <Box></Box>
        </Box>
    )
}
