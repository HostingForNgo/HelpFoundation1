import { Box, Button } from "@mui/material";


export default function GalleryCard({img,func}) {
    return (
        <Box flexShrink={0} padding={"20px"} minHeight={"50px"} justifyContent={"space-evenly"} maxHeight={"180px"} display={"flex"} alignItems={"center"} width={"100%"} boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}>
            <img style={{height:"100%"}} src={img} alt="m" />
            <Button onClick={func} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "20%", background: "#7912f7", height: "30px" }} >
                Delete
            </Button>
        </Box>
    )
}