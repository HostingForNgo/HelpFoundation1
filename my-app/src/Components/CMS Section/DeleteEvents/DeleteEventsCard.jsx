import { Box, Button, Typography } from "@mui/material";


export default function DeleteEventCard({ images, title, date, func }) {
    return (
        <Box flexShrink={0} padding={"20px"} minHeight={"50px"} flexDirection={"column"}  display={"flex"} alignItems={"center"} width={"100%"} boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}>
            <Box width={"100%"} display={"flex"} justifyContent={"space-around"}>
                <Box>
                    <Typography fontSize={"30px"} fontWeight={"800"}>{title}</Typography>
                    <Typography>{date}</Typography>
                </Box>
                <Button onClick={func} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "20%", background: "#7912f7", height: "30px" }} >
                    Delete
                </Button>
            </Box>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
                {images.map(i=>(
                    <img width={"23%"} src={i}/>
                ))}
            </Box>
        </Box>
    )
}