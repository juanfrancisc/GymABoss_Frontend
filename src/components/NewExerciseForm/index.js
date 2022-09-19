import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useTokenContext } from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";

const NewExerciseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typology, setTypology] = useState("");
  const { token } = useTokenContext();

  const navigate = useNavigate();

  const photoRef = useRef();

  return (
    <form
      onSubmit={async (event) => {
        try {
          event.preventDefault();

          const newExercise = { title, description, typology };

          const res = await fetch(
            `${process.env.REACT_APP_API_URL}/exercises/new`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
              body: JSON.stringify(newExercise),
            }
          );

          const body = await res.json();

          if (!res.ok) {
            throw new Error(body.message);
          }

          const exercisePhoto = photoRef.current.files[0];

          if (exercisePhoto) {
            const formData = new FormData();

            formData.append("exercisePhoto", exercisePhoto);

            const photoRes = await fetch(
              `${process.env.REACT_APP_API_URL}/exercise/${body.data.id}/photo`,
              {
                method: "PUT",
                headers: {
                  Authorization: token,
                },
                body: formData,
              }
            );

            const photoBody = await photoRes.json();

            if (!photoRes.ok) {
              throw new Error(photoBody.message);
            }
          }

          toast.success(body.message);
          navigate("/");
        } catch (error) {
          console.error(error.message);
          toast.error(error.message);
        }
      }}
    >
      <label htmlFor="title">Nombre:</label>
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
      <input
        id="typology"
        value={typology}
        onChange={(event) => {
          setTypology(event.target.value);
        }}
      />

      <label htmlFor="photo"></label>
      <input id="photo" type="file" accept="image/*" ref={photoRef} />

      <button>Crear ejercicio</button>
    </form>
  );
};

export default NewExerciseForm;
