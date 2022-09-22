import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const NavbarButton = (typologyFilter) => {
    const [typology, setTypology] = useState("");
    console.log(typology)

    useEffect (() => {
        const fetchTypology = async () => {

            try {

                const res = await fetch(`${process.env.REACT_APP_API_URL}/listExercises/${typologyFilter}`);

                const body = await res.json();
                console.log(body);


                setTypology(body.data)
                
            } catch (error) {
                console.error(error.message);
                toast.error(error.message);
            }
        }
        fetchTypology();

    },[typology])

    return (
        <p>{typology}</p>
    )

} 

export default NavbarButton;