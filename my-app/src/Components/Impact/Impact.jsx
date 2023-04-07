import { Box } from "@mui/system";
import { useContext } from "react";
import React from 'react';
import { Context } from "../../ContextApi";
import { Typography } from "@mui/material";
import ImpactCard from "./ImpactCard";
export default function Impact() {
    let { images } = useContext(Context);
    return (
        <Box width={"100%"} minHeight={"500px"} alignItems={"center"} justifyContent={"center"} display={"flex"} gap={"20px"} flexDirection={"column"}>
            <Typography fontWeight={"900"} fontSize={"40px"} m={"20px 0"} color={"rgb(86, 79, 164)"}>Impact</Typography>
            <Box width={["90%", "85%", "80%"]} display={"flex"} flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignContent={"flex-start"}>
                <Typography fontWeight={"bold"} fontFamily={'"Roboto","Helvetica","Arial",sans-serif'}>
                    At Help Foundation, our goal is to make a meaningful impact on the lives of young people around the world. Through our training programs in data science and blockchain technology, we aim to equip young people with the skills they need to succeed in the digital economy, and to create positive change in their communities and beyond.
                    Our impact can be seen in the success stories of the young people we have trained. We have seen our graduates go on to secure meaningful employment, launch successful businesses, and make a difference in their communities. We are proud to have played a role in their success, and we are committed to continuing to support them and others like them in the future.
                    We measure our impact not just in terms of the number of people we reach, but in the quality of the training and support we provide. We aim to provide a transformative experience that equips young people with the knowledge and skills they need to thrive, and that inspires them to pursue their dreams and make a positive impact in the world.

                    Our ultimate goal is to help create a more equitable and inclusive world, where everyone has the opportunity to succeed. We believe that by investing in the potential of young people, we can help create a brighter future for all.
                </Typography>
            </Box>
            <Box></Box>
        </Box>
    )
}