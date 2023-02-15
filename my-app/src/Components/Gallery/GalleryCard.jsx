import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";



export default function GalleryCard({img}){
    const [styleObj, setStyleObj] = useState({
        opacity: 0,
        left: "-15%"
    })
    const ref = useRef(null)
    useEffect(() => {
        const temp = ref.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setStyleObj({
                        opacity: 1,
                        left: "0"
                    });
                }
                else setStyleObj({
                    opacity: 0,
                    left: "-15%"
                });
            });
        });
        observer.observe(temp);
        return ()=>{
            try{
                observer.unobserve(temp);
            }
            catch(err){
                console.log(err)
            }
        }
    }, [])
    return (
        <Box ref={ref} sx={{...styleObj,position:"relative",transition:"1s"}} width={["95%","90%","75%","75%"]} display={"flex"} justifyContent={"center"}>
            <img style={{width:"100%"}} src={img} alt="ff" />
        </Box>
    )
}