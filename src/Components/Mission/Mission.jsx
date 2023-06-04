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
            <Typography variant="h4" fontWeight={700}><em>Mission: Empowering Lives, Transforming Communities</em>
                <br /></Typography>
                <Typography fontWeight={"bold"} fontFamily={'"Roboto","Helvetica","Arial",sans-serif'}>
Welcome to Vinayak Samajik Sewa Sansthan, a dynamic NGO dedicated to fostering positive change in multiple domains. Our mission is to empower individuals, uplift communities, and create sustainable development across a wide range of areas. With a comprehensive approach, we work tirelessly to address the pressing challenges in agriculture, animal husbandry, dairying, fisheries, art and culture, biotechnology, children's welfare, civic issues, dalit upliftment, differently-abled individuals, disaster management, drinking water, education, literacy, aged and elderly care, environment and forests preservation, food processing, health and family welfare, HIV/AIDS prevention and support, housing, human rights advocacy, information and communication technology, labour and employment opportunities, land resources management, legal awareness and aid, microfinance for self-help groups, micro, small, and medium enterprises support, minority issues, new and renewable energy promotion, nutrition enhancement, panchayati raj empowerment, right to information advocacy, science and technology advancement, urban development, poverty alleviation, vocational training, water resources management, and women's development and empowerment.
<br />
<br />
Through innovative strategies, collaborative partnerships, and community engagement, we strive to bring about holistic and sustainable transformation. Our dedicated team of professionals and volunteers work tirelessly to implement impactful projects, mobilize resources, and advocate for the rights and well-being of the marginalized and underprivileged. With an unwavering commitment to social justice and equality, we seek to build a future where every individual has access to opportunities, resources, and a dignified life.

<br />
<br />
Join us on this remarkable journey as we create a world that celebrates diversity, protects the environment, nurtures talent, and uplifts the vulnerable. Together, we can make a profound difference and build thriving communities where every individual has the chance to flourish.



                </Typography>
            </Box>
            <Box></Box>
        </Box>
    )
}