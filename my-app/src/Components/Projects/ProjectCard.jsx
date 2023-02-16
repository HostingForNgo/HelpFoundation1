import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";



export default function ProjectCard({ img, role, description, name }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x:-150 },
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
            <Box sx={{ transition: "1s", overflowX: "hidden" }} className={"card"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} position={"relative"} flexShrink={0} >
                <Box width={"100%"} height={"50%"}>
                    <img draggable={"false"} style={{ width: "100%", height: "100%" }} src={"https://thumbs.dreamstime.com/b/donate-letterpress-word-written-vintage-type-42205146.jpg"} alt={"projects"} />
                </Box>
                <Box padding={"20px"} width={"100%"} height={"50%"}>
                    <Typography fontWeight={"800"} fontSize={"18px"} mb={"10px"}>Heading</Typography>
                    <Typography fontSize={["10px", "14px"]} color={"grey"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat adipisci doloremque. Provident nulla eveniet </Typography>
                    <Box display={"flex"} m={"10px 0"} gap={"10px"} flexDirection={["column", "row", "row", "row"]}>
                        <Button style={{ background: "red", color: "white", fontFamily: "Raleway", flex: "1" }}>Volunteer</Button>
 
                        <NavLink style={{ textDecoration: "none", flex: "1", width: "100%" }} to={"1"}>
                            <Button style={{ fontSize: "13px", background: "orange", color: "white", fontFamily: "Raleway", width: "100%" }}>Read More...</Button>
                        </NavLink>
                        
                    </Box>
                    <Button style={{ background: "lightgreen", color: "white", fontFamily: "Raleway", width:"100%" }}>Donate</Button>
                </Box>
            </Box>
        </motion.div>
    )
}
