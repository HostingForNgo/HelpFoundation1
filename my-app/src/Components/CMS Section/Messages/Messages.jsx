import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";



export default function Messages() {
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/messages").then((res)=>setData(res.data))
    }, [])
    return (
        <Box width={"100%"} minHeight={"100%"} p={"20px"}>
            <Typography fontSize={"40px"}>Messages</Typography>
            {
                data.map((i)=>{
                    return (
                        <MessageCard name={i.name} email={i.email} address={i.address} subject={i.subject} messag={i.message} />
                    )
                })
            }
        </Box>
    )
}