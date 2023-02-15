import { useRef } from "react";
import { createContext, useState } from "react";


export const Context = createContext();
export default function ContextProvider({ children }) {
    let [items, setItems] = useState([])
    let [images,setImages] = useState([]);
    let [careerData,setCareerData] = useState([]);
    const [styleObj, setStyleObj] = useState({
        opacity: 0,
        left: "-15%"
    })
    let productsCardRef = useRef(null)

    return (
        <Context.Provider value={{items, setItems,images,setImages,careerData,setCareerData,styleObj, setStyleObj,productsCardRef}}>
            {children}
        </Context.Provider>
    )
}