import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";



export default function IndividualBlogPage() {
    const parentRef = useRef(null);
    let data = useParams();
    window.scrollTo(0,0);
    let [blogData,setBlogData] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3001/blogs/${data.blogID}`).then((res)=>{
            setBlogData(res.data);
            parentRef.current.innerHTML = (res.data.mainBlog)
        })
    },[])
    return (
        <Box ref={parentRef} id={"blogContainer"} width={"100%"} minHeight={"100vh"} padding={"20px"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            
        </Box>
    )
}