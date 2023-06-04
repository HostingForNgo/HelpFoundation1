import { Box } from "@mui/system";
import React from 'react';
import { Typography } from "@mui/material";
import VisionCard from "./VisionCard";
export default function Certificates() {
    return (
        <Box width={"100%"} minHeight={"500px"} alignItems={"center"} justifyContent={"center"} display={"flex"} gap={"20px"} flexDirection={"column"}>
            <Typography fontWeight={"900"} fontSize={"40px"} m={"20px 0"} color={"rgb(86, 79, 164)"}>Vision</Typography>
            <Box width={["90%", "85%", "80%"]} display={"flex"} flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignContent={"flex-start"}>
                <Typography fontWeight={"bold"} fontFamily={'"Roboto","Helvetica","Arial",sans-serif'}>
                    Our vision at Help Foundation is to create a world where every young person has the opportunity to reach their full potential in the digital economy. We envision a future where the power of data science and blockchain technology is harnessed to drive innovation and positive change, and where young people are equipped with the skills they need to thrive in this rapidly evolving landscape.

                    We believe that by providing access to high-quality training and support in data science and blockchain technology, we can help young people unlock new opportunities and build meaningful careers. We aim to empower a new generation of digital leaders who are equipped with the knowledge and skills to drive innovation and create value in a wide range of fields.

                    Our ultimate goal is to build a more equitable and inclusive world where everyone has the opportunity to succeed. By investing in young people and providing them with the tools they need to thrive, we believe we can help create a brighter future for all. We are committed to pursuing this vision with passion, dedication, and a relentless focus on excellence.




                </Typography>
            </Box>
            <Box></Box>
        </Box>
    )
}