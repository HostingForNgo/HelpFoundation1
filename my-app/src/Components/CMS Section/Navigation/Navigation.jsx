import { Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";


export default function Navigation() {
    
    return (
        <>
            <Box display={"flex"} gap={"20px"} flexDirection={"column"} p={"20px"} position={"relative"} left={0} height={"100%"} width={"20%"}>
                <NavLink to={"AddMember"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>ADD MEMBERS</Button>
                </NavLink>
                <NavLink to={"UpdateMembers"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>UPDATE MEMBERS</Button>
                </NavLink>
                <NavLink to={"AddTestimonial"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>ADD TESTIMONIAL</Button>
                </NavLink>
                <NavLink to={"ModifyTestimonials"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>MODIFY TESTIMONIAL</Button>
                </NavLink>
                <NavLink to={"AddMedia"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>UPLOAD MEDIA</Button>
                </NavLink>
                <NavLink to={"UploadGallery"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>DELETE MEDIA</Button>
                </NavLink>
                <NavLink to={"AddJobs"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>ADD JOBS</Button>
                </NavLink>
                <NavLink to={"JobApplications"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>JOB APPLICATIONS</Button>
                </NavLink>
                <NavLink to={"Messages"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>MESSAGES</Button>
                </NavLink>
            </Box>
        </>
    )
}