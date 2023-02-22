import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import s from "./Involvement.module.css"
export default function LifeAffectedCard({ title, description, counter }) {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [count,setCount] = useState(0)
    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    useEffect(() => {
        if (!isInView) {
            setCount(0)
            return 
        };
        let intervalId = setInterval(() => {
          if (count < 100) {
            setCount(prev =>{
                if(prev==counter) {
                    clearInterval(intervalId);
                    return counter
                }
               return prev + 1
            });
          }
        }, 50);
        return () => clearInterval(intervalId); 
      }, [isInView]);
    return (
        <motion.div
            className={s.InvolvementCardAnimation}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}>
                <Box className={"InvolvementMainCard"} pb={"20px"} ref={ref} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} overflow={"hidden"} position={"relative"} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}>
                    <Box width={"100%"} height={"100%"} overflow={"hidden"}>
                        <Box width={"100%"} height={"70%"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={"20px"}>
                            <Typography letterSpacing={"20px"} p={0} fontWeight={"900"} fontSize={["100px","100px","100px","150px"]} color={"rgb(108, 132, 56)"}>{count}</Typography>
                            <Typography  fontWeight={"900"} color={"#564fa4"} fontSize={"20px"}>Lives Affected</Typography>
                        </Box>
                        <Box width={"100%"} display={"flex"} flexDirection={"column"} padding={"20px"}>
                            <Typography fontWeight={"800"} color={"#564fa4"} fontSize={"18px"}>{title}</Typography>
                            <Typography fontSize={"12px"} color={"grey"}>
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
        </motion.div>
    )
}