import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import ModifyActivityReportsCard from "./ModifyActivityReportsCard";



export default function ModifyActivityReports() {
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/ActivityReports")
            .then(res => setData(res.data))
    }, [])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"} p={"30px"} width={"100%"} height={"600px"} >
            {data.length === 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <ModifyActivityReportsCard key={i._id} id={i._id} heading={i.heading} images={i.images} func={() => {
                        let temp = data.filter((item, ind) => index !== ind);
                        setData(temp);
                        axios.delete(`http://localhost:3001/ActivityReports/${i._id}`)
                    }} />
                )
            })}
        </Box>
    )
}