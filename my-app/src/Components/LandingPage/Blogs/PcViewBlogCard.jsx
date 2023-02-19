import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";


export default function PcViewBlogCard({ blog, head, id, wid, date }) {
    return (
        <Box display={["none", "none", "flex", "flex"]} width={wid} height={"400x"} bgcolor={"#efefef"}>
            <Box width={"40%"} p={"20px"} overflow={"hidden"} display={"flex"} alignItems={"center"}>
                <img style={{ width: "100%",height:"100%" }} src={"https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg"} alt="" />
            </Box>
            <Box width={"60%"} p={"20px"} height={"100%"}>
                <Box height={"70%"}fontFamily={"arial"} display={"flex"} flexDirection={"column"} gap={"15px"} overflow={"hidden"}> 
                    <Typography fontSize={"30px"} color={"#564fa4"} fontWeight={"900"}>
                        {head}
                    </Typography >
                    <Typography fontSize={"17px"} color={"gray"} fontWeight={"900"}>
                        {date}
                    </Typography >
                    <Typography color={"black"}  fontSize={["0", 0, "12px", "14px"]} >
                        {blog}
                        {blog}
                        {blog}
                    </Typography>
                </Box>
                <Box p={"10px"} height={"30%"} display={"flex"} alignItems={"center"}>
                    <NavLink style={{ textDecoration: "none" }} to={`/Blog/${id}`}>
                        <Button sx={{ background: "white", color: "black", fontFamily: "arial",border:"2px solid black","&:hover":{background:"black",color:"white"}}}>Read More</Button>
                    </NavLink>
                </Box>
            </Box>
        </Box>
    )
}