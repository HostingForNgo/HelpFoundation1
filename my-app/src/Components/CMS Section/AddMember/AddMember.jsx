import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import InputBox from "../InputBox";
export default function AddTeam() {
    const [name, setName] = useState("")
    const [imgSrc, setImg] = useState("")
    const [role, setRole] = useState("")
    const [summary, setSummary] = useState("")
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
                    <InputBox value={name} typ={"text"} func={setName} Category={"Name"} />
                    <InputBox value={role} typ={"text"} func={setRole} Category={"Role"} />
                    <InputBox value={summary} typ={"text"} func={setSummary} Category={"Summary"} />
                    <Box>
                        <Typography>{"ImgSrc"}</Typography>
                        <input type={"file"} onChange={handleFileChange} />
                    </Box>
                    <Button variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "40%", background: "#7912f7", margin: "auto" }} onClick={(e) => {
                        let data = {
                            name,
                            secondText: role,
                            description: summary,
                            img: imgSrc,
                        }
                        console.log(data);
                        axios.post("http://localhost:3001/team", data);
                        // axios.post("https://futuristic-unexpected-citrine.glitch.me/team", data);
                        setName("");
                        setRole("");
                        setSummary("");
                    }} >Add To Team</Button>
                </Box>

            <Box display={"flex"} alignItems={"center"} gap={"20px"} flexDirection={"column"} width={"50%"}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"205px"} width={"205px"} overflow={"hidden"} border={"2px solid black"}>
                    {imgSrc?<img draggable={false} width={"100%"} src={imgSrc} alt="logo" />:<Typography textAlign={"center"} width={"70%"} fontSize={"40px"}>NO URL</Typography>}
                </Box>
                <Typography fontSize={"20px"}>{name || "Name"}</Typography>
                <Typography fontSize={"20px"}>{role || "Role"}</Typography>
                <Typography fontSize={"20px"}>{summary || "Summary"}</Typography>
            </Box>
        </Box>
    )
}