import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Spinner from "../src/components/Spinner/Spinner";

//Importamos BrowserRouter, Routes, Route para el trabajo de rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>

      </header>
      <main>
          <Spinner />
      </main>

      {/* Para mostrar las alertas */}
      <ToastContainer position="bottom-center" theme="dark" />

      <footer>

      </footer>
    </BrowserRouter>
  )
}

export default App;
