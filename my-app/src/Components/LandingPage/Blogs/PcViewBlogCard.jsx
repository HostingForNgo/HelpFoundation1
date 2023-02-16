import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";


export default function PcViewBlogCard({ blog, head, id, wid }) {
    return (
        <Box display={["none", "none", "flex", "flex"]} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} width={wid} minHeight={"400x"} >
            <Box width={"40%"} p={"20px"} overflow={"hidden"} display={"flex"} alignItems={"center"}>
                <img style={{ width: "100%" }} src={"https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg"} alt="" />
            </Box>
            <Box width={"60%"} p={"20px"} height={"100%"}>

                <Box height={"70%"}fontFamily={"arial"} display={"flex"} flexDirection={"column"} gap={"15px"} overflow={"hidden"}> 
                    <Typography fontSize={"30px"} fontWeight={"900"}>
                        {head}
                    </Typography >
                    <Typography color={"gray"}  fontSize={["0", 0, "12px", "14px"]} >
                        {blog}
                        {blog}
                    </Typography>
                </Box>
                <Box p={"10px"} height={"30%"} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
                    <NavLink style={{ textDecoration: "none", width: "100%", height: "90%" }} to={`/Blog/${id}`}>
                        <Button style={{ background: "orange", color: "white", fontFamily: "Raleway", width: "100%", height: "100%" }}>Read More</Button>
                    </NavLink>
                </Box>
            </Box>
        </Box>
    )
}