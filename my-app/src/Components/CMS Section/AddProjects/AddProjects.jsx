import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRef, useState } from "react";


export default function AddProjects() {
    let headingRef = useRef(null)
    let descriptionRef = useRef(null)
    let [volunteer,setVolunteer] = useState(false)
    function handleSubmit() {
        let obj = {
            heading: headingRef.current.value,
            volunteer: volunteer,
            description: descriptionRef.current.value,
        }
        axios.post("https://futuristic-unexpected-citrine.glitch.me/Projects",obj)
        console.log(obj);
        headingRef.current.value=""
        descriptionRef.current.value=""
    }
    return (
        <Box width={"100%"} minHeight={"100%"} p={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box width={"50%"}>
                <Typography>Heading</Typography>
                <input ref={headingRef} style={{width:"100%",padding:"10px"}} type="text" />
            </Box>
            
            <Box width={"50%"}>
                <Typography>Description</Typography>
                <textarea  ref={descriptionRef} style={{ resize: "none",width:"100%",padding:"10px",minHeight:"300px" }} />
            </Box>
            <Box width={"50%"} display={"flex"} p={"20px"} gap={"10px"}>
                <FormControlLabel control={<Checkbox onChange={(e)=>setVolunteer(e.target.checked)} defaultChecked />} label="Volunteer" />
            </Box>
            <Button onClick={handleSubmit} sx={{fontWeight:"bold",width:"50%",background:"lightgreen","&:hover":{background:"green",color:"white"}}}>Upload</Button>

        </Box>
    )
}