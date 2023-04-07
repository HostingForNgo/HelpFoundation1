import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function CenterDetailsPage() {
    let data = useParams();
    window.scrollTo(0, 0);
    let [blogData, setBlogData] = useState({})
    useEffect(() => {
        console.log(data)
        axios.get(`http://localhost:3001/centers/${data.CenterID}`).then((res) => {
            setBlogData(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <Box width={"100%"} minHeight={"100vh"} padding={"20px"} display={"flex"} flexDirection={"column"} gap={"30px"} alignItems={"center"}>
            <img src={blogData.image} alt="img" />
            <Typography width={["100%","80%","70%","50%"]}>{blogData.description}</Typography>
        </Box>
    )
}