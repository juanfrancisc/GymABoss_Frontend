import { useState } from "react";
import { toast } from "react-toastify";
import LogoutButton from "../LogoutButton/LogoutButton";
//import useExercises from "../../hooks/useExercises";


const TypologyFilter = () => {
    const [typology, setTypology] = useState("");
    //console.log(typology)
  
    //const  typologia  = useExercises();

    return (
      <>
      <form onSubmit={async(event) => {
        try{
          event.preventDefault();
          
          const res = await fetch(`${process.env.REACT_APP_API_URL}/getExercises/${typology}`)
          console.log(res)
          const body = await res.json();
          console.log(body)

          if (!res.ok) {
            throw new Error(body.message);
          }

          setTypology(body.data)
          toast.success(body.message);
        } catch (error){
          console.error(error.message);
          toast.error(error.message);
        }
      }}>
        <label htmlFor="typology">Tipologia:</label>
        <select id="typology" 
        value={typology}
        onChange={(event) => {
          setTypology(event.target.value)
        }}>
          <option value="cardio" defaultValue>cardio</option>
          <option value="musculacion">musculacion</option>
          <option value="natacion">natacion</option>
          <option value="relajacion">relajacion</option>
        </select>
        
        <button type="submit">Buscar</button>
      </form>
      <div className='logout'>
        <LogoutButton />
      </div>

      </>
    );
  };
  
  export default TypologyFilter;