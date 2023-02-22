import { useRef } from "react";
import { createContext, useState } from "react";


export const Context = createContext();
export default function ContextProvider({ children }) {
    let [items, setItems] = useState([])
    let [images,setImages] = useState([]);
    let [careerData,setCareerData] = useState([]);
    let [isAdmin,setIsAdmin] = useState(localStorage.getItem("loginStatus") || false);
    let [projectsData,setProjectsData] = useState([]);
    let [events,setEvents] = useState([]);
    const [page,setPage] = useState(1);
    const [maxPage,setMaxPage] = useState(1);
    let productsCardRef = useRef(null)

    return (
        <Context.Provider value={{items, setItems,images,setImages,careerData,setCareerData,productsCardRef,isAdmin,setIsAdmin,projectsData,setProjectsData,page,setPage,maxPage,setMaxPage,events,setEvents}}>
            {children}
        </Context.Provider>
    )
}