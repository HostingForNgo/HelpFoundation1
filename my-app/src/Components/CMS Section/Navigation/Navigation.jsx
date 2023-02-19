import { Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";


export default function Navigation() {
    
    return (
        <>
            <Box display={"flex"} gap={"20px"} flexDirection={"column"} p={"20px"} position={"relative"} left={0} width={"20%"} sx={{overflowY:"scroll",position:"sticky",maxHeight:"100vh"}}>
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
                <NavLink to={"AddGalleryMedia"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>ADD GALLERY MEDIA</Button>
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
                <NavLink to={"AddBlogs"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>ADD BLOGS</Button>
                </NavLink>
                <NavLink to={"AddProjects"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>ADD PROJECTS</Button>
                </NavLink>

                <NavLink to={"DeleteGalleryMedia"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>Delete GALLERY MEDIA</Button>
                </NavLink>
                <NavLink to={"AddEvents"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>ADD EVENTS</Button>
                </NavLink>
                <NavLink to={"DeleteEvents"}>
                    <Button variant="contained" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", height: "40px", background: "#7912f7" }}>Delete EVENTS</Button>
                </NavLink>
            </Box>
        </>
    )
}