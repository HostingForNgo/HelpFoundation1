import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";



export default function ProjectCard({ heading,volunteer,description,id }) {
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
                    <Typography fontWeight={"800"} fontSize={"18px"} mb={"10px"}>{heading}</Typography>
                    <Typography fontSize={["10px", "14px"]} color={"grey"}>{description.slice(0,100)}</Typography>
                    <Box display={"flex"} m={"10px 0"} gap={"10px"} flexDirection={["column", "row", "row", "row"]}>
                        <Button style={{ background: "#6c8438", color: "white", fontFamily: "Roboto, sans-serif", flex: "1",display:volunteer?"flex":"none" }}>Volunteer</Button>
 
                        <NavLink style={{ textDecoration: "none", flex: "1", width: "100%" }} to={`${id}`}>
                            <Button sx={{ fontSize: "13px",border:"2px solid black", color: "black", fontFamily: "Roboto, sans-serif", width: "100%","&:hover":{background:"black",color:"white"}}}>Read More...</Button>
                        </NavLink>
                    </Box>
                    <Button style={{ background: "#564fa4", color: "white", fontFamily: "Roboto, sans-serif", width:"100%" }}>Donate</Button>
                </Box>
            </Box>
        </motion.div>
    )
}
