import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { set } from "mongoose";
import { useRef, useState } from "react";


export default function AddEvents() {
    let headingRef = useRef(null)
    let descRef = useRef(null)
    let locationRef = useRef(null)
    let [image,setImage] = useState([])
    function handleSubmit() {
        let obj = {
            heading: headingRef.current.value,
            location:locationRef.current.value,
            description: descRef.current.value,
            image: image,
        }
        axios.post("http://localhost:3001/centers", obj)
        console.log(obj);
        headingRef.current.value = ""
        descRef.current.value = ""
        locationRef.current.value = ""
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    };
    return (
        <Box width={"100%"} minHeight={"100%"} p={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box width={"100%"} display={"flex"} justifyContent={"center"}>
                <Box width={"50%"}>
                    <Box width={"100%"}>
                        <Typography>Heading</Typography>
                        <input ref={headingRef} style={{ width: "100%", padding: "10px" }} type="text" />
                    </Box>
                    <Box width={"100%"}>
                        <Typography>Location</Typography>
                        <input ref={locationRef} style={{ width: "100%", padding: "10px" }} type="text" />
                    </Box>
                    <Box width={"100%"}>
                        <Typography>Description</Typography>
                        <textarea ref={descRef} style={{ resize: "none", width: "100%", padding: "10px", minHeight: "300px" }} />
                    </Box>
                    <Box width={"100%"}>
                        <Typography>Image</Typography>
                        <input onChange={handleFileChange } type={"file"} />
                    </Box>
                </Box>
            </Box>
            <Button onClick={handleSubmit} sx={{ fontWeight: "bold", width: "50%", background: "lightgreen", "&:hover": { background: "green", color: "white" } }}>Upload</Button>

        </Box>
    )
}