import { useState } from "react";
import lupa from '../../assets/imagenes/lupa_w.png'
import './styles.css';

const SearchForm = ({ searchParams, setSearchParams }) => {
  // Recogemos las props, y en vez de iniciar los inputs con comillas vacías, los iniciamos con el valor que haya en los searchParams (si existe)

  const initialSearch = searchParams.get("title") || "";

  const [title, setTitle] = useState(initialSearch);
  const [description , setDescription] = useState(initialSearch)

  return (
    <form className="search_form"
      onSubmit={(event) => {
        event.preventDefault();

        const queryParams = {title, description}

        if (title) {
          queryParams.title = title;
        }

        setSearchParams(new URLSearchParams(queryParams));
      }}
    >
      <label htmlFor="title"></label>
      <input
      className="search_inp"
      placeholder=" Encuentra tu ejercicio"
        id="title"
        type="multiselect"
        value={title}
        onChange={(event) => {
            setTitle(event.target.value);
            setDescription(event.target.value)
        }}
      />

      <button className="search_but"> <img src={lupa} height={25}/></button>
    </form>
  );
};

export default SearchForm;