import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";



export default function IndividualProjectPage() {
    let {projectID} = useParams();
    const parentRef = useRef(null)
    window.scrollTo(0,0);
    useEffect(() => {
        axios.get(`http://localhost:3001/Projects/${projectID}`).then(res=>{
            parentRef.current.innerHTML = res.data.html
        })
    })
    return (
        <Box ref={parentRef} id={"blogContainer"} width={"100%"} minHeight={"100vh"} padding={"20px"} p={["20px","20px","20px 40px","20px 40px"]}>
            
        </Box>
    )
}
