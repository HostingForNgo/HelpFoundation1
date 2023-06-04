import { Box } from "@mui/system";
import { useContext } from "react";
import React from 'react';
import { Context } from "../../ContextApi";
import { Typography } from "@mui/material";
import CertificatesCard from "./CertificatesCard";
import cer1 from "../../Static/Certificates/1.jpeg"
import cer2 from "../../Static/Certificates/2.jpeg"
import cer3 from "../../Static/Certificates/3.jpeg"
import cer4 from "../../Static/Certificates/4.jpeg"
import cer5 from "../../Static/Certificates/5.jpeg"
import cer6 from "../../Static/Certificates/6.jpeg"
import cer7 from "../../Static/Certificates/7.jpeg"
import cer8 from "../../Static/Certificates/8.jpeg"
import cer9 from "../../Static/Certificates/9.jpeg"
import cer10 from "../../Static/Certificates/10.jpeg"
import cer11 from "../../Static/Certificates/11.jpeg"
import cer12 from "../../Static/Certificates/12.jpeg"
import cer13 from "../../Static/Certificates/13.jpeg"
import cer14 from "../../Static/Certificates/14.jpeg"
export default function Certificates() {
    let { images } = useContext(Context);
    let certificates = [cer1,cer2,cer3,cer4,cer5,cer6,cer7,cer8,cer9,cer10,cer11,cer12,cer13,cer14]
    return (
        <Box width={"100%"} minHeight={"100vh"} alignItems={"center"} display={"flex"} gap={"20px"} flexDirection={"column"}>
            <Typography fontWeight={"900"} fontSize={"40px"} m={"20px 0"} color={"rgb(86, 79, 164)"}>Certificates</Typography>
            <Box width={"90%"} display={"flex"} flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignContent={"flex-start"}>
                {
                    certificates.map(i=>(
                        <CertificatesCard src={i} />
                    ))
                }
                {/* <CertificatesCard/>
                <CertificatesCard/>
                <CertificatesCard/>
                <CertificatesCard/>
                <CertificatesCard/> */}
            </Box>
            <Box></Box>
        </Box>
    )
}