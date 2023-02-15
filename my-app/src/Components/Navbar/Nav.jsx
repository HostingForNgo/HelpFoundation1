import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import Logo from "./logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Navbar() {

    return (
        <>
            <Box sx={{ width: "100%", height: "70px", display: "flex", justifyContent: "space-between", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                <Box width={["60%", "60%", "900px", "70%"]} sx={{ height: "100%", display: "flex", justifyContent: "center", fontSize: "24px" }} display={["none", "none","none", "flex"]}>
                    <Box sx={{ height: "100%", display: "flex", alignItems: "center" }} ml={["0", "0", "0", "90px"]}>
                        <img style={{ borderRadius: "50%" }} src={Logo} alt="logo" />
                        <Typography sx={{ fontFamily: "Permanent Marker, cursive", fontStyle: "italic", fontSize: "18px", width: "135px", fontWeight: "bold", ml: "10px" }}>HELP FOUNDATION</Typography>
                    </Box>

                    <Box sx={{ alignItems: "center", width: "80%", height: "100%", justifyContent: "center", fontSize: "24px", color: "white" }} display={["none", "none", "flex"]}>
                        <Box className={"dropDown1"} width={"15%"} height={"80%"} display={"flex"} alignItems={"center"} position={"relative"}>
                            <Box width={"100%"} height={"100%"}>
                                <NavLink className={"underLine"} style={{ color: "black", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "700", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} to={"/"}>Home</NavLink>
                            </Box>
                        </Box>
                        <Box className={"dropDown1"} width={"17%"} height={"80%"} display={"flex"} alignItems={"center"} position={"relative"}>
                            <Box width={"100%"} height={"100%"}>
                                <Box className={"underLine"} color={"black"} style={{ textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "700", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer",gap:"10px" }}>About <KeyboardArrowDownIcon /> </Box>
                            </Box>
                            <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} className={"open"} width={"102%"} bgcolor={"white"} position={"absolute"} top={"55px"} display={"none"} flexDirection={"column"} zIndex={"2"}>
                                <NavLink to={"/Team"} className={"hoverEffect"} style={({isActive})=>{
                                    if(!isActive){
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else{
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700",background:"black",color:"white" }
                                    }
                                }}>TEAM</NavLink>
                                <NavLink to={"/Mission"} className={"hoverEffect"} style={({isActive})=>{
                                    if(!isActive){
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else{
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700",background:"black",color:"white" }
                                    }
                                }} >MISSION</NavLink>
                                <NavLink to={"/Vision"} className={"hoverEffect"} style={({isActive})=>{
                                    if(!isActive){
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else{
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700",background:"black",color:"white" }
                                    }
                                }} >VISION</NavLink>
                                <NavLink to={"/Career"} className={"hoverEffect"} style={({isActive})=>{
                                    if(!isActive){
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else{
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700",background:"black",color:"white" }
                                    }
                                }} >CAREER</NavLink>
                            </Box>
                        </Box>

                        <Box className={"dropDown1"} width={"17%"} height={"80%"} display={"flex"} alignItems={"center"} position={"relative"}>
                            <Box width={"100%"} height={"100%"}>
                                <NavLink className={"underLine"} style={{ color: "black", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "700", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} to={"/Projects"}>Projects </NavLink>
                            </Box>
                        </Box>

                        <Box className={"dropDown1"} width={"19%"} height={"80%"} display={"flex"} alignItems={"center"} position={"relative"}>
                            <Box width={"100%"} height={"100%"}>
                                <Box className={"underLine"} color={"black"} style={{ textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "700", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer",gap:"10px" }}>Initiatives <KeyboardArrowDownIcon /></Box>
                            </Box>
                            <Box  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} className={"open"} width={"102%"} bgcolor={"white"} position={"absolute"} top={"55px"} display={"none"} flexDirection={"column"} zIndex={"2"} >
                                <NavLink to={"/Impact"} className={"hoverEffect"} style={({isActive})=>{
                                    if(!isActive){
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else{
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700",background:"black",color:"white" }
                                    }
                                }}>IMPACT</NavLink>
                                <NavLink to={"/OngoingInitiatives"} className={"hoverEffect"} style={({isActive})=>{
                                    if(!isActive){
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else{
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700",background:"black",color:"white" }
                                    }
                                }} >ONGOING INITIATIVES</NavLink>
                            </Box>
                        </Box>
                        <Box  className={"dropDown1"} width={"17%"} height={"80%"} display={"flex"} alignItems={"center"} position={"relative"}>
                            <Box width={"100%"} height={"100%"}>
                                <Box className={"underLine"} color={"black"} style={{ textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "700", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer",gap:"10px" }}>Media  <KeyboardArrowDownIcon /></Box>
                            </Box>
                            <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} className={"open"} width={"110%"} bgcolor={"white"} position={"absolute"} top={"55px"} display={"none"} flexDirection={"column"} zIndex={"2"}>

                                <NavLink to={"/Gallery"} className={"hoverEffect"} style={({isActive})=>{
                                    if(!isActive){
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else{
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700",background:"black",color:"white" }
                                    }
                                }}>GALLERY</NavLink>
                                <NavLink to={"/MediaCoverage"} className={"hoverEffect"} style={({isActive})=>{
                                    if(!isActive){
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else{
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700",background:"black",color:"white" }
                                    }
                                }} >MEDIA COVERAGE</NavLink>
                                <NavLink to={"/Certificates"} className={"hoverEffect"} style={({isActive})=>{
                                    if(!isActive){
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else{
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700",background:"black",color:"white" }
                                    }
                                }} >CERTIFICATES</NavLink>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display={["none", "none", "none", "flex"]} justifyContent={"center"} alignItems={"center"} height={"100%"} width={"30%"}>
                    <NavLink style={{ textDecoration: "none" }} to={"/Projects"}>
                        <Button variant="text" style={{ fontFamily: 'Roboto, sans-serif', fontSize: "15px", width: "150px", height: "70%", background: "#ff7d7d", color: "white", borderRadius: "10px", fontWeight: "800" }}>Start Donation</Button>
                    </NavLink>
                </Box>
                <Hamburger />
            </Box>
        </>
    )
}
