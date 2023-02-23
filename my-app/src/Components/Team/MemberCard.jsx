
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function MemberCard({ img, name, description, role }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}
        >
            <Box className={"card"} overflow={"hidden"} borderRadius={"50px 0 50px 0"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} position={"relative"} flexShrink={0} minHeight={["500px", "485px", "500px", "500px"]}>
                <Box className="content">
                    <Box className={"front"}>
                        <Box width={"100%"} height={"75%"}>
                            <img draggable={"false"} style={{ width: "100%", height: "100%" }} src={img} alt={"member"} />
                        </Box>
                        <Box padding={"20px"} width={"100%"} height={"25%"}>
                            <Typography fontWeight={"800"} fontSize={"18px"} color={"#564fa4"}>{name}</Typography>
                            <Typography fontWeight={"800"} fontSize={"13px"} color={"black"}>{role}</Typography>
                            <Typography fontSize={"12px"} color={"grey"}>{description}</Typography>
                        </Box>
                    </Box>
                    <Box bgcolor={"black"} className={"back"} p={"20px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={"30px"}>
                        <Box justifyContent={"space-evenly"} gap={"10px"} display={"flex"}>
                            <LinkedInIcon sx={{width:"40px",height:"40px",cursor:"pointer"}}/>
                            <TwitterIcon sx={{width:"40px",height:"40px",cursor:"pointer"}}/>
                            <InstagramIcon sx={{width:"40px",height:"40px",cursor:"pointer"}}/>
                        </Box>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore ducimus quaerat fugiat doloremque placeat! Quaerat, quasi aperiam molestias, animi deleniti dolore non dolor cupiditate fugit commodi in optio harum vel, aliquam placeat. Officia, facilis assumenda eius iste deleniti aut perspiciatis sapiente. At, est ab ipsa,
                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}
