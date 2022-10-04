import { useState } from "react";

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
      <label htmlFor="title">Titulo o Descripción:</label>
      <input
        id="title"
        type="multiselect"
        value={title}
        onChange={(event) => {
            setTitle(event.target.value);
            setDescription(event.target.value)
        }}
      />

      <button>Buscar</button>
    </form>
  );
};

export default SearchForm;