import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CustomTokenContextProvider } from "./contexts/TokenContext";
import Spinner from "../src/components/Spinner/Spinner";

//Importamos BrowserRouter, Routes, Route para el trabajo de rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewExercisePage from "./pages/NewExercisePage";
import ExercisesPage from "./pages/ExercisesPage";
import RegisterPage from "./pages/RegisterPage/Registerpage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import VerExercise from "./components/VerExercise/VerExercise_pruebas";
import RememberPass from "./components/RememberPass/RememberPass";
import EditExercisePage from "./pages/EditExercisePge";
import EditExerciseForm from "./components/EditExerciseForm/EditExerciseForm";
//mport DeteleExercise from "./components/DeleteExercise/DeleteExercise";
//import TypologyFilter from "./components/TypologyFilter/TypologyFilter";
//import NavbarButton from "./components/NavbarButton/NavbarButton";


function App() {

  return (
    <BrowserRouter>
      <CustomTokenContextProvider>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<LoginPage  />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/remenberPass' element={<RememberPass />} />
            <Route path="/newExercise" element={<NewExercisePage />} />
            <Route path="/verExercise/:id" element={<VerExercise />} />
            <Route path="/exercisesPage" element={<ExercisesPage />} />
            <Route path="/exercisesPage/:id" element={<ExercisesPage />} />
            <Route path="/exercisesPage/:typology" element={<ExercisesPage />} />
            <Route path="/modifyExercises/:id" element={<EditExercisePage />} />
            {/* <Route path="/deleteExercise/:id" element={<DeteleExercise />} /> */}
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Para mostrar las alertas */}
        <ToastContainer position="bottom-center" theme="dark" />

        <footer>Gym a Boss 2022</footer>
      </CustomTokenContextProvider>
    </BrowserRouter>
  );
}

export default App;
