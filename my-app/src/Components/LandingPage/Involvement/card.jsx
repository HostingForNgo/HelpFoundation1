import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import s from "./Involvement.module.css"
export default function Card({ text, imgSrc, linkk }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div
            className={s.InvolvementCardAnimation}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}>
            <Box className={"InvolvementMainCard"} pb={"20px"} ref={ref} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} height={["120vw", "40vw", "35vw", "30vw"]} bgcolor="#414141" borderRadius={"50px 50px 0 0"} overflow={"hidden"} position={"relative"}>
                <Box width={"100%"} height={"100%"} position={"absolute"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Box height={"200%"} bgcolor="white" width={"200px"} className={"involvementAnimationCard"}>

                    </Box>
                </Box>
                <Box width={"98%"} height={"98%"} borderRadius={"50px 50px 0 0"} overflow={"hidden"} position={"absolute"} top={"1%"} left={"1%"} bgcolor={"#414141"}>
                    <Box width={"100%"} height={"80%"} display={"flex"} justifyContent={"center"} >
                        <img draggable={"false"} src={imgSrc} style={{ width: "100%" }} />
                    </Box>
                    <Box width={"100%"} height={"15%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <NavLink style={{ textDecoration: "none", width: "85%", height: "100%", bgcolor: "white" }} to={`/${linkk}`}>
                            <Button sx={{ transition: ".25s", marginTop: "20px", "&:hover": { borderRadius: "10px 40px 10px 40px", border: "2px solid red", color: "white" }, background: "red", color: "white", fontWeight: "900", borderRadius: "10px", width: "100%", height: "100%", fontSize: "16px", letterSpacing: "2px" }} >{text}</Button>
                        </NavLink>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}