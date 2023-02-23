import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import LifeAffectedCard from "./LifeAffectedCard";

export default function LivesAffected(){
    let [data,setData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3001/lifeAffected").then(res=>setData(res.data))
    }, [])
    
    return (
        <Box width={"100%"} minHeight={"100vh"} p={"20px"} display={"flex"} flexWrap={"wrap"} gap={"20px"} justifyContent={"center"}>
            {
                data.map((i)=>(
                    <LifeAffectedCard title={i.title} description={i.description.slice(0,200)} counter={Number(i.count)}/>
                ))
            }
        </Box>
    )
}