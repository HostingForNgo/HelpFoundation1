import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogsCard";

export default function Blogs() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://futuristic-unexpected-citrine.glitch.me/blogs").then(res => setData(res.data));
    }, [])

    return (
        <Box p={"20px"} alignItems={"center"} gap={"20px"} display={"flex"} flexWrap={"wrap"} flexDirection={"column"} width={"100%"}>
            <Typography fontFamily={"arial"} fontSize={"40px"}>Blogs</Typography>
            <Box  display={"flex"} p={"20px"} flexWrap={"wrap"} columnGap={["0", "2%", "1%", "2%"]} minHeight={"500px"} rowGap={"20px"} width={"100%"} >
                {
                    data.map((i) => (
                        <BlogCard key={i.id}  blog={i.blog.slice(0,200)} head={i.heading} id={i.id} />
                    ))
                }
            </Box>
        </Box>
    )
}