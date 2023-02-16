
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import s from "./Blogs.module.css"
export default function BlogCard({ blog, head, id, wid }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div
        className={s.BlogsCard}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}
            // style={{width:wid}}
            >
            
            <Box  flexShrink={0} width={"100%"} >
                <Box width={"100%"} height={"300px"} overflow={"hidden"}>
                    <img style={{ width: "100%" }} src="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg" />
                </Box>
                <Box minHeight={"260px"}>
                    <Box padding={"10px"}>
                        <Typography fontFamily={"arial"} fontSize={"25px"}>{head}</Typography>
                    </Box>
                    <Box padding={"10px"} fontSize={"12px"} color={"gray"} fontFamily={"arial"}>
                        {blog}
                    </Box>
                    <Box padding={"10px"}>
                        <NavLink style={{ textDecoration: "none" }} to={`/Blog/${id}`}>
                            <Button style={{ background: "orange", color: "white", fontFamily: "Raleway" }}>Read More</Button>
                        </NavLink>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}