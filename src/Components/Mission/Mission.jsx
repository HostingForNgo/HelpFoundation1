import { Box } from "@mui/system";
import { useContext } from "react";
import React from 'react';
import { Context } from "../../ContextApi";
import { Typography } from "@mui/material";
import MissionCard from "./MissionCard";
export default function Certificates() {
    let { images } = useContext(Context);
    return (
        <Box width={"100%"} minHeight={"500px"}  alignItems={"center"} justifyContent={"center"} display={"flex"} gap={"20px"} flexDirection={"column"}>
            <Typography fontWeight={"900"} fontSize={"40px"} m={"20px 0"} color={"rgb(86, 79, 164)"}>Mission</Typography>
            <Box width={["90%","85%","80%"]} display={"flex"} flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignContent={"flex-start"}>
                <Typography fontWeight={"bold"} fontFamily={'"Roboto","Helvetica","Arial",sans-serif'}>
                    At Help Foundation, our mission is to empower young people with the skills they need to succeed in the rapidly changing digital economy. We believe that everyone deserves access to high-quality education and training opportunities, and we are committed to making this a reality for young people across the globe.

                    To achieve this mission, we focus on providing training and support in two key areas: data science and blockchain technology. We recognize that these fields are becoming increasingly important in the modern world, and that there is a growing demand for skilled professionals who can leverage these tools to drive innovation and create value.

                    Through our training programs, we aim to equip young people with the knowledge and skills they need to succeed in these fields. We provide hands-on, practical training that emphasizes real-world applications and problem-solving skills. Our programs are designed to be accessible to anyone, regardless of their background or prior experience.

                    We are committed to making a positive impact in the world, and we believe that empowering young people with the skills they need to succeed in data science and blockchain technology is one of the most effective ways to do so. By providing access to high-quality training and support, we are helping to build a brighter future for all.




                </Typography>
            </Box>
            <Box></Box>
        </Box>
    )
}