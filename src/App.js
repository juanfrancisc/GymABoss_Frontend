import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CustomTokenContextProvider } from "./contexts/TokenContext";
import Spinner from "../src/components/Spinner/Spinner";

//Importamos BrowserRouter, Routes, Route para el trabajo de rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/Registerpage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <CustomTokenContextProvider>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Spinner />
        </main>

        {/* Para mostrar las alertas */}
        <ToastContainer position="bottom-center" theme="dark" />

        <footer></footer>
      </CustomTokenContextProvider>
    </BrowserRouter>
  );
}

export default App;
