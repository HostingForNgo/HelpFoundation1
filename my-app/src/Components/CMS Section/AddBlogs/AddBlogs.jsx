import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRef } from "react";


export default function AddBlogs() {
    let headingRef = useRef(null)
    let dateRef = useRef(null)
    let blogRef = useRef(null)

    function handleSubmit() {
        let obj = {
            heading: headingRef.current.value,
            date: dateRef.current.value,
            blog: blogRef.current.value,
        }
        axios.post("https://futuristic-unexpected-citrine.glitch.me/blogs",obj)
        console.log(obj);
        headingRef.current.value=""
        dateRef.current.value=""
        blogRef.current.value=""
    }
    return (
        <Box width={"100%"} minHeight={"100%"} p={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box width={"50%"}>
                <Typography>Heading</Typography>
                <input ref={headingRef} style={{width:"100%",padding:"10px"}} type="text" />
            </Box>
            <Box width={"50%"}>
                <Typography>Date</Typography>
                <input  ref={dateRef} style={{width:"100%",padding:"10px"}} type="date" />
            </Box>
            <Box width={"50%"}>
                <Typography>Blog</Typography>
                <textarea  ref={blogRef} style={{ resize: "none",width:"100%",padding:"10px",minHeight:"300px" }} />
            </Box>
            <Button onClick={handleSubmit} sx={{fontWeight:"bold",width:"50%",background:"lightgreen","&:hover":{background:"green",color:"white"}}}>Upload</Button>

        </Box>
    )
}