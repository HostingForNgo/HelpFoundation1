import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";



export default function EventsCard({ heading, description, date, images, id, fundRaised }) {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [donateBtnState, setDonateBtnState] = useState(false);
    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    useEffect(() => {
        const today = new Date(Date.now());
        let Compare = new Date(date)
        if (Compare >= today) setDonateBtnState(true);
        else setDonateBtnState(false)
    })
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
                    <img draggable={"false"} style={{ width: "100%", height: "100%" }} src={images[0]} alt={"projects"} />
                </Box>
                <Box padding={"20px"} width={"100%"} height={"50%"}>
                    <Typography fontWeight={"800"} fontSize={"18px"} mb={"10px"}>{heading}</Typography>
                    <Typography color={"black"}>Date: {date}</Typography>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Typography color={"black"} fontSize={"12px"}>Fund Raised : {`${fundRaised || 0}%`}</Typography>
                        <Box width={"100%"} height={"20px"} bgcolor={"#dedede"} borderRadius={"20px"} overflow={"hidden"}>
                            <Box height={"100%"} width={`${fundRaised}%`} bgcolor={"gray"}></Box>
                        </Box>
                    </Box>
                    <Typography fontSize={["10px", "14px"]} color={"grey"}>{description.slice(0, 100)}</Typography>
                    <Box display={"flex"} m={"10px 0"} gap={"10px"} flexDirection={["column", "row", "row", "row"]}>
                        <NavLink style={{ textDecoration: "none", flex: "1", width: "100%" }} to={`Events/${id}`}>
                            <Button sx={{ fontSize: "13px", border: "2px solid rgb(108, 132, 56)", color: "rgb(108, 132, 56)", fontFamily: "Roboto, sans-serif", width: "100%", "&:hover": { background: "rgb(108, 132, 56)", color: "white", flex: "1" } }}>Read More...</Button>
                        </NavLink>
                        <Button style={{ display: donateBtnState ? "block" : "none", background: "rgb(86, 79, 164)", color: "white", fontFamily: "Roboto, sans-serif", flex: "1" }}>Donate</Button>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}
