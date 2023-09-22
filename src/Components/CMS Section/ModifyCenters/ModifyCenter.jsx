

import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import CenterCard from "./CenterCard";
import { useContext } from "react";
import { Context } from "../../../ContextApi";  
export default function ModifyCenters() {
    const {apiLink} = useContext(Context);
    let [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(apiLink+"centers")
        .then(res=>setData(res.data))
    },[apiLink])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"}  p={"30px"} width={"100%"} height={"600px"} >
            {data.length == 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <CenterCard img={i.image} key={i._id} heading={i.heading} location={i.location} description={i.description} id={i._id} func={()=>{
                        let temp = data.filter((item,ind)=>index!=ind);
                        setData(temp);
                        axios.delete(apiLink+`centers/${i._id}`)
                    }}/>
                )
            })}
        </Box>
    )
}