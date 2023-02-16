import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogsCard";
import PcViewBlogCard from "./PcViewBlogCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Blogs() {
    const [data, setData] = useState([]);
    const [margin, setMargin] = useState(0);

    function handleMoveRight() {
        let temp = (-(data.length - 1) * 100);
        if (margin == temp) return;
        setMargin(margin - 100)
    }
    function handleMoveLeft() {
        console.log(margin)
        if (margin == 0) return;
        setMargin(margin + 100)
    }




    useEffect(() => {
        axios.get("https://futuristic-unexpected-citrine.glitch.me/blogs").then(res => setData(res.data));
    }, [])

    return (
        <Box p={"20px"} alignItems={"center"} gap={"20px"} display={"flex"} flexWrap={"wrap"} flexDirection={"column"} width={"100%"}>
            <Typography fontFamily={"arial"} fontSize={"40px"}>Blogs</Typography>
            <Box display={"flex"} p={"20px"} flexWrap={"wrap"} columnGap={["0", "2%", "1%", "2%"]} minHeight={"500px"} rowGap={"20px"} width={"100%"}>
                <Box width={"100%"} boxShadow={["rgba(0, 0, 0, 0.24) 0px 3px 8px","rgba(0, 0, 0, 0.24) 0px 3px 8px","none","none"]} position={"relative"} overflow={"hidden"} p={[0,0,"20px","20px"]}>
                    <Box width={["50px","50px","100px","100px"]} height={["50px","50px","100px","100px"]} color={"white"} bgcolor={"rgba(0, 0, 0, 0.5)"} position={"absolute"} left={"0"} top={["calc( 50% - 25px )","calc( 50% - 25px )","calc( 50% - 50px )","calc( 50% - 50px )"]} borderRadius={"50%"} onClick={handleMoveLeft} display={margin==0?"none":"flex"} alignItems={"center"} justifyContent={"center"}>
                        <KeyboardArrowLeftIcon sx={{color:"white"}}/>
                    </Box>

                    <Box width={["50px","50px","100px","100px"]} height={["50px","50px","100px","100px"]} color={"white"} position={"absolute"} right={0} top={["calc( 50% - 25px )","calc( 50% - 25px )","calc( 50% - 50px )","calc( 50% - 50px )"]} onClick={handleMoveRight} borderRadius={"50%"} bgcolor={"rgba(0, 0, 0, 0.5)"} display={margin==(-(data.length - 1) * 100)?"none":"flex"} alignItems={"center"} justifyContent={"center"}>
                        <KeyboardArrowRightIcon  sx={{color:"white"}}/>
                    </Box>

                    <Box width={`${data.length * 100}%`} minHeight={"400px"} marginLeft={`${margin}%`} display={"flex"} sx={{ transition: ".4s" }} >
                        {
                            data.map((i) => (
                                <PcViewBlogCard wid={`${100 / data.length}%`} key={i.id} blog={i.blog.slice(0, 200)} head={i.heading} id={i.id} />
                            ))
                        }
                        {
                            data.map((i) => (
                                <BlogCard wid={`${100 / data.length}%`} key={i.id} blog={i.blog.slice(0, 200)} head={i.heading} id={i.id} />
                            ))
                        }
                    </Box>
                </Box>


            </Box>
        </Box>
    )
}