import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";



export default function EventDetailsPage() {
    let data = useParams();
    const parentRef = useRef(null)
    window.scrollTo(0,0);
    let [blogData,setBlogData] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3001/event/${data.EventID}`).then((res)=>{
            parentRef.current.innerHTML = res.data.html
            setBlogData(res.data)
        })
    },[])
    return (
        <Box className={"mainEventParent"} ref={parentRef} width={"100%"} minHeight={"100vh"} padding={"20px"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            
        </Box>
    )
}