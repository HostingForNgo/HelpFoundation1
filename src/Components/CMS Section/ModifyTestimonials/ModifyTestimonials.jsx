import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import TestimonialCard from "./TestimonialCard";



export default function DeleteTestimonials() {
    let [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://helpapi.onrender.com/testimonials")
        .then(res=>setData(res.data))
    },[])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"}  p={"30px"} width={"100%"} height={"600px"} >
            {data.length == 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <TestimonialCard key={i._id} image={i.image} text={i.testimonial} id={i._id} func={()=>{
                        let temp = data.filter((item,ind)=>index!=ind);
                        setData(temp);
                        axios.delete(`https://helpapi.onrender.com/testimonials/${i._id}`)
                    }}/>
                )
            })}
        </Box>
    )
}