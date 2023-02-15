import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
export default function AddGallery() {
    const [imgSrc, setImg] = useState("")
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImg(reader.result);
        };
      };
    return (
        <Box gap={"20px"} display={"flex"} p={"30px"} justifyContent={"center"} width={"100%"} alignItems={"center"} height={"600px"} >
                <Box display={"flex"} gap={"20px"} flexDirection={"column"} width={"50%"}>
                    <Box >
                        <Typography>{"Image"}</Typography>
                        <input type={"file"} onChange={handleFileChange} />
                    </Box>
                    <Box >
                        <Typography>Tags</Typography>
                        <input type="text" onChange={handleFileChange} />
                    </Box>
                    <Button variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "40%", background: "#7912f7", margin: "auto" }} onClick={(e) => {
                        let data = {
                            img: imgSrc,
                        }
                        console.log(data);
                        axios.post("https://futuristic-unexpected-citrine.glitch.me/gallery", data);
                    }} >Add To Team</Button>
                </Box>

            <Box display={"flex"} alignItems={"center"} gap={"20px"} flexDirection={"column"} width={"50%"}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"205px"} width={"205px"} overflow={"hidden"} border={"2px solid black"}>
                    {imgSrc?<img draggable={false} width={"100%"} src={imgSrc} alt="logo" />:<Typography textAlign={"center"} width={"70%"} fontSize={"40px"}>NO URL</Typography>}
                </Box>
            </Box>
        </Box>
    )
}
