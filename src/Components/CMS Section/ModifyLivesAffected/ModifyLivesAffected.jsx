

import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import ModifyLivesAffectedCard from "./ModifyLivesAffectedCard";
import { useContext } from "react";
import { Context } from "../../../ContextApi";



export default function ModifyLivesAffected() {
    const {apiLink} = useContext(Context);
    let [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(apiLink+"lifeAffected")
        .then(res=>setData(res.data))
    },[apiLink])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"}  p={"30px"} width={"100%"} height={"600px"} >
            {data.length === 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <ModifyLivesAffectedCard key={i._id} title={i.title} description={i.description} count={i.count} id={i._id} func={()=>{
                        let temp = data.filter((item,ind)=>index!==ind);
                        setData(temp);
                        axios.delete(apiLink+`lifeAffected/${i._id}`)
                    }}/>
                )
            })}
        </Box>
    )
}