

import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import BlogCard from "./BlogCard";
import { useContext } from "react";
import { Context } from "../../../ContextApi";
// import JobCard from "./JobCard";



export default function ModifyJobs() {
    const {apiLink} = useContext(Context);
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get(apiLink+"blogs")
            .then(res => setData(res.data))
    }, [apiLink])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"} p={"30px"} width={"100%"} height={"600px"} >
            {data.length == 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <BlogCard key={i._id} image={i.carouselImg} heading={i.heading} blog={i.blog} date={i.date} id={i._id} mainBlog={i.mainBlog} func={() => {
                        let temp = data.filter((item, ind) => index != ind);
                        setData(temp);
                        axios.delete(apiLink+`blogs/${i._id}`);
                    }} />
                )
            })}
        </Box>
    )
}