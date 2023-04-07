import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRef, useState } from "react";



export default function AddActivityReports() {
    const headingRef = useRef(null);
    const [file, setFile] = useState("");
    const [images, setImages] = useState([]);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImages([...images,reader.result]);
        };
    };
    const handleFileChange1 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFile(reader.result);
        };
    };
    return (
        <Box width={"100%"} p={"30px"}>
            <Box width={"100%"} display={"flex"}>
                <Box width={"50%"}>
                    <Box width={"100%"}>
                        <Typography>Year</Typography>
                        <input ref={headingRef} style={{ width: "100%", padding: "10px" }} type="text" />
                    </Box>
                    <Box width={"100%"}>
                        <Typography>Image</Typography>
                        <input onChange={handleFileChange} style={{ width: "100%", padding: "10px" }} type="file" />
                    </Box>
                    <Box width={"100%"}>
                        <Typography>File {"*.pdf"}</Typography>
                        <input onChange={handleFileChange1} style={{ width: "100%", padding: "10px" }} type="file" />
                    </Box>
                </Box>
                <Box width={"50%"} display={"flex"} gap="10px" flexWrap={"wrap"} p={"10px"}>
                    
                    {
                        images.map((i,index)=> (
                            <Box width={"48%"} height={"150px"} position={"relative"}>
                                <img style={{ width: "100%",height:"100%" }} src={i} />
                                <Box display={"flex"} justifyContent={"center"} color={"white"} alignItems={"center"} position={"absolute"} top={"0"} width={"100%"} height={"100%"} fontFamily={"arial"} fontSize={"100px"} onClick={()=>{
                                    let filter = images.filter((el,index1)=>index1!=index);
                                    setImages(filter)
                                }}>X</Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Button onClick={() => {
                let obj = {
                    heading:headingRef.current.value,
                    images:images,
                    pdf:file
                }
                axios.post("http://localhost:3001/ActivityReports",obj)
                console.log(obj)
            }}
            sx={{ marginTop: "20px", width: "100px", background: "lightgreen", color: "black", "&:hover": { background: "green", color: "white" } }}>
                Upload
            </Button>
        </Box>
    )
}