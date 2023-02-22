import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRef, useState } from "react";


export default function AddProjects() {
    // let headingRef = useRef(null)
    // let descriptionRef = useRef(null)
    // let [volunteer,setVolunteer] = useState(false)
    // function handleSubmit() {
    //     let obj = {
    //         heading: headingRef.current.value,
    //         volunteer: volunteer,
    //         description: descriptionRef.current.value,
    //     }
    //     axios.post("http://localhost:3001/projects",obj)
    //     // axios.post("https://futuristic-unexpected-citrine.glitch.me/Projects",obj)
    //     console.log(obj);
    //     headingRef.current.value=""
    //     descriptionRef.current.value=""
    // }
    // return (
    //     <Box width={"100%"} minHeight={"100%"} p={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
    //         <Box width={"50%"}>
    //             <Typography>Heading</Typography>
    //             <input ref={headingRef} style={{width:"100%",padding:"10px"}} type="text" />
    //         </Box>

    //         <Box width={"50%"}>
    //             <Typography>Description</Typography>
    //             <textarea  ref={descriptionRef} style={{ resize: "none",width:"100%",padding:"10px",minHeight:"300px" }} />
    //         </Box>
    //         <Box width={"50%"} display={"flex"} p={"20px"} gap={"10px"}>
    //             <FormControlLabel control={<Checkbox onChange={(e)=>setVolunteer(e.target.checked)} defaultChecked />} label="Volunteer" />
    //         </Box>
    //         <Button onClick={handleSubmit} sx={{fontWeight:"bold",width:"50%",background:"lightgreen","&:hover":{background:"green",color:"white"}}}>Upload</Button>

    //     </Box>
    // )
    let [volunteer, setVolunteer] = useState(false)
    let headingRef = useRef(null)
    let dateRef = useRef(null)
    let blogRef = useRef(null)
    let [images, setImages] = useState([])
    function handleSubmit() {
        let obj = {
            heading: headingRef.current.value,
            date: dateRef.current.value,
            blog: blogRef.current.value,
            images: images
        }

        axios.post("http://localhost:3001/blogs", obj)
        // axios.post("https://futuristic-unexpected-citrine.glitch.me/blogs",obj)
        console.log(obj);
        headingRef.current.value = ""
        dateRef.current.value = ""
        blogRef.current.value = ""
        setImages([])
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImages([...images, reader.result]);
        };
    };
    return (
        <Box width={"100%"} minHeight={"100%"} p={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box width={"100%"} display={"flex"}>
                <Box width={"50%"}>
                    <Box width={"100%"}>
                        <Typography>Heading</Typography>
                        <input ref={headingRef} style={{ width: "100%", padding: "10px" }} type="text" />
                    </Box>
                    <Box width={"100%"}>
                        <Typography>Date</Typography>
                        <input ref={dateRef} style={{ width: "100%", padding: "10px" }} type="date" />
                    </Box>
                    <Box width={"100%"}>
                        <Typography>Blog</Typography>
                        <textarea ref={blogRef} style={{ resize: "none", width: "100%", padding: "10px", minHeight: "300px" }} />
                    </Box>
                    <input type={"file"} onChange={handleFileChange} />
                    <FormControlLabel control={<Checkbox onChange={(e) => setVolunteer(e.target.checked)} defaultChecked />} label="Volunteer" />
                </Box>
                <Box width={"50%"} display={"flex"} flexWrap={"wrap"} p={"20px"} gap={"10px"}>
                    {
                        images.map((el, i) => (
                            <Box key={i} width={"48%"} height={"200px"} position={"relative"}>
                                <img style={{ position: "absolute" }} width={"100%"} height={"200px"} src={el} alt="w" />
                                <Box position={"absolute"} wtop={"0"} zIndex={"10"} display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"}>
                                    <Typography onClick={() => {
                                        let filteredData = images.filter((e, index) => index != i);
                                        setImages(filteredData)
                                    }}
                                        zIndex={20} sx={{ cursor: "pointer" }} fontSize={"30px"} color={"white"}>Delete</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Button onClick={handleSubmit} sx={{ fontWeight: "bold", width: "50%", background: "lightgreen", "&:hover": { background: "green", color: "white" } }}>Upload</Button>
        </Box>
    )
}