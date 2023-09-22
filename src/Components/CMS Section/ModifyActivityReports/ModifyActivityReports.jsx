import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import ModifyActivityReportsCard from "./ModifyActivityReportsCard";
import { Context } from "../../../ContextApi";



export default function ModifyActivityReports() {
    const {apiLink} = useContext(Context);
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get(apiLink+"ActivityReports")
            .then(res => setData(res.data))
    }, [])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"} p={"30px"} width={"100%"} height={"600px"} >
            {data.length === 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <ModifyActivityReportsCard key={i._id} id={i._id} heading={i.heading} images={i.images} func={() => {
                        let temp = data.filter((item, ind) => index !== ind);
                        setData(temp);
                        axios.delete(apiLink+`ActivityReports/${i._id}`)
                    }} />
                )
            })}
        </Box>
    )
}