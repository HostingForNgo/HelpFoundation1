import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import axios from 'axios';

export default function MediaCard({ name, img, role, desc, func, id }) {
    let [editable,setEditable] = React.useState(true)
    let nameRef = React.useRef(null)
    let roleRef = React.useRef(null)
    let descRef = React.useRef(null)
    return (
        <Box width={"23%"} minHeight={"350px"} border={"2px solid black"}>
            <Box width={"100%"} height={"250px"}>
                <img draggable={"false"} style={{ width: "100%", height: "100%" }} src={img} alt={"member"} />
            </Box>
            <Box padding={"20px"} width={"100%"} minHeight={"25%"} p={"20px"}>
                <textarea ref={nameRef} readOnly={editable} defaultValue={name} style={{ resize: "none", border: "none", display: "block" }} />
                <textarea ref={roleRef} readOnly={editable} defaultValue={role} style={{ resize: "none", border: "none", display: "block" }} />
                <textarea ref={descRef} readOnly={editable} defaultValue={desc} style={{ resize: "none", border: "none", display: "block", height: "100px" }} />
                <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                    <Button onClick={func} sx={{ color: "white", bgcolor: "red", width: "100%", "&:hover": { background: "white", color: "red", border: "2px solid red" } }} size="small">Delete</Button>
                    <Button onClick={() => {
                        setEditable(false)
                    }} 
                    sx={{display:editable?"flex":"none" ,color: "white", bgcolor: "red", width: "100%", "&:hover": { background: "white", color: "red", border: "2px solid red" } }} size="small">Update</Button>
                    <Button onClick={() => {
                        let obj = {
                            name:nameRef.current.value,
                            secondText:roleRef.current.value,
                            description:descRef.current.value,
                            id:`https://helpapi.onrender.com/team/${id}`
                        }
                        axios.patch(`https://helpapi.onrender.com/team/${id}`,obj)
                        console.log(`https://helpapi.onrender.com/team/${id}`)
                        setEditable(true)
                        // axios.patch()
                    }} 
                    sx={{display:!editable?"flex":"none" ,color: "white", bgcolor: "red", width: "100%", "&:hover": { background: "white", color: "red", border: "2px solid red" } }} size="small">Save</Button>
                </Box>
            </Box>
        </Box>
    );
}