import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Styles from "../AddTeam.module.css"

export default function AddTestimonials() {
    let [testimonials, setTestimonials] = useState()
    return (
        <Box gap={"20px"} display={"flex"} p={"30px"} flexDirection={"column"} justifyContent={"center"} width={"100%"} alignItems={"center"} height={"600px"} >
            <Box sx={{ width: "50%" }}>
                <Typography>Testimonials</Typography>
                <input value={testimonials} onInput={(e)=>{
                    setTestimonials(e.target.value)
                }} className={Styles.input} />
            </Box>
            <Button onClick={()=>{
                let temp = {
                    testimonial:testimonials
                }
                axios.post("https://futuristic-unexpected-citrine.glitch.me/testimonials",temp);
                setTestimonials("")
            }} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "40%", background: "#7912f7"}} >
                Add To Testimonials
            </Button>
        </Box>
    )
}