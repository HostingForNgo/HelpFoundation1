

import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard";
import { useContext } from "react";
import { Context } from "../../../ContextApi";



export default function ModifyJobs() {
    const {apiLink} = useContext(Context);
    let [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(apiLink+"projects")
        .then(res=>setData(res.data))
    },[apiLink])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"}  p={"30px"} width={"100%"} height={"600px"} >
            {data.length === 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <ProjectCard key={i._id} images={i.images} heading={i.heading} isVolunteer={i.volunteer} location={i.location} description={i.description} id={i._id} func={()=>{
                        let temp = data.filter((item,ind)=>index!==ind);
                        setData(temp);
                        axios.delete(apiLink+`projects/${i._id}`)
                    }}/>
                )
            })}
        </Box>
    )
}