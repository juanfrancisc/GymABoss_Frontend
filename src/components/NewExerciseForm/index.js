import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useTokenContext } from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";

const NewExerciseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typology, setTypology] = useState("");
  const { token } = useTokenContext();

  /* const decodedToken = JSON.parse(atob(token.split(".")[1]));
  console.log(decodedToken) */

  const navigate = useNavigate();

  const photoRef = useRef();

  /* if(decodedToken.type !== 'admin'){
    console.error("Errorooooo");
    
  } */

  return (
    <form
      onSubmit={async (event) => {
        try {
          event.preventDefault();
          const exerecisePhoto = photoRef.current.files[0];
          //console.log(exerecisePhoto);


          const formData = new FormData();
          if (!exerecisePhoto) {
            throw new Error("NO hay FOTO!")
          }
          formData.append("photo", exerecisePhoto);
          formData.append("title", title);
          formData.append("description", description);
          formData.append("typology", typology);


          const res = await fetch(
            `${process.env.REACT_APP_API_URL}/newExercise`,
            {
              method: "POST",
              headers: {
                authorization: token,
              },
              body:  formData,
            }
          );

          const body = await res.json();

          if (!res.ok) {
            throw new Error(body.message);
          }

          toast.success(body.message);
          navigate("/");
        } catch (error) {
          console.error(error.message);
          toast.error(error.message);
        }
      }}
    >
      <label htmlFor="title">Titulo:</label>
      <input
        id="title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />

      <label htmlFor="description">Descripción:</label>
      <input
        id="description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <label htmlFor="typology">Tipología:</label>
      <select name="typology" id="typology"
        onChange={(event) => {
          setTypology(event.target.value)
        }}>
        <option value="" selected></option>
        <option value="cardio">Cardio</option>
        <option value="musculacion">Musculación</option>
        <option value="relajacion">Relejación</option>
        <option value="natacion">Natación</option>
      </select>


      <label htmlFor="photo"></label>
      <input id="photo" type="file" accept="image/*" ref={photoRef} />

      <button>Crear ejercicio</button>
    </form>
  );
};

export default NewExerciseForm;
