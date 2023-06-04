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
            <Typography variant="h4" fontWeight={700}><em>Creating Lasting Change, One Life at a Time</em>
                <br /></Typography>
                <Typography fontWeight={"bold"} fontFamily={'"Roboto","Helvetica","Arial",sans-serif'}>

At Vinayak Samajik Sewa Sansthan, our relentless pursuit of social impact has resulted in transformative changes across diverse sectors. Through our unwavering commitment and collaborative efforts, we have made a significant difference in the lives of individuals and communities.
<br />
<br />
In the domain of agriculture, we have empowered farmers with sustainable practices, modern techniques, and access to markets, thereby improving their livelihoods and enhancing food security. Our initiatives in animal husbandry, dairying, and fisheries have boosted rural economies, creating employment opportunities and ensuring a sustainable source of income for communities.
<br />
<br />
Art and culture lie at the heart of our work, as we recognize their power to preserve heritage, inspire creativity, and promote inclusivity. By organizing cultural events, supporting local artists, and providing platforms for artistic expression, we have revitalized cultural traditions and instilled a sense of pride among communities.
<br />
<br />
Our efforts in biotechnology have accelerated scientific advancements, fostering innovation and improving healthcare outcomes. Through awareness campaigns and community engagement, we have championed the rights of children, promoting their well-being, education, and protection from exploitation.
<br />
<br />
In the realm of disaster management, we have responded swiftly and effectively, providing relief, rehabilitation, and support to affected communities during times of crisis. Our initiatives in the drinking water sector have ensured access to clean and safe water, promoting public health and hygiene.
<br />
<br />
Education and literacy have been a cornerstone of our work, empowering individuals with knowledge, skills, and opportunities for a brighter future. We have also worked tirelessly to uplift the aged and elderly, providing them with care, support, and a dignified life.
<br />
<br />
Our commitment to environmental conservation and forest preservation has resulted in the restoration of ecosystems, protection of biodiversity, and the creation of sustainable livelihoods for local communities. In the field of food processing, we have promoted entrepreneurship, value addition, and market linkages, boosting income generation and creating employment opportunities.
<br />
<br />
Health and family welfare initiatives have improved access to quality healthcare, promoted preventive measures, and addressed critical issues such as HIV/AIDS. Through our housing projects, we have provided safe and sustainable shelter to the homeless and marginalized.
<br />
<br />
Vinayak Samajik Sewa Sansthan has been at the forefront of advocating for human rights, empowering individuals with legal awareness and aid. Our microfinance programs have uplifted self-help groups, fostering economic independence and entrepreneurship.
<br />
<br />
Our support for micro, small, and medium enterprises has stimulated economic growth, generated employment, and contributed to local development. We have championed minority issues, promoting inclusivity, diversity, and social cohesion.
<br />
<br />
Our focus on renewable energy has led to a greener and more sustainable future, reducing carbon footprints and ensuring access to clean energy sources. Nutrition enhancement programs have improved the health and well-being of vulnerable communities, particularly women and children.
<br />
<br />
Through our advocacy for panchayati raj, we have strengthened grassroots democracy, empowering local governance and community participation. Our work in right to information and advocacy has fostered transparency, accountability, and citizen empowerment.
<br />
<br />
Science and technology advancements have been harnessed to bridge the digital divide, providing access to information, communication, and opportunities for all. Our initiatives in urban development and poverty alleviation have transformed slums into vibrant, inclusive communities with improved infrastructure and access to basic services.
<br />
<br />
Vocational training programs have equipped individuals with the skills necessary for sustainable employment and entrepreneurship. Our water resources management efforts have enhanced water availability, irrigation practices, and conservation measures.
<br />
<br />
Women's development and empowerment have been central to our mission, as we strive to create an equitable society where women have equal rights, opportunities, and representation. Through various programs, we have empowered women economically, socially, and politically.
<br />
<br />
Together, our impact reverberates in the lives of countless individuals and communities, as we continue
                </Typography>
            </Box>
            <Box></Box>
        </Box>
    )
}