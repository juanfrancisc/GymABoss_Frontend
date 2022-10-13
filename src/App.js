import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CustomTokenContextProvider } from './contexts/TokenContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index'
import LoginPage from './pages/LoginPage'
import NewExercisePage from './pages/NewExercisePage'
import ExercisesPage from './pages/ExercisesPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import RememberPass from './components/RememberPass'
import EditExercisePage from './pages/EditExercisePage'
import ExerciseDetail from './pages/ExerciseDetailPage'
import ViewFavoriteList from './components/ViewFavoriteList'


function App() {
    return (
        <BrowserRouter>
            <CustomTokenContextProvider>
                <header>
                    <Header />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route
                            path="/rememberPass"
                            element={<RememberPass />}
                        />
                        <Route
                            path="/newExercise"
                            element={<NewExercisePage />}
                        />
                        <Route
                            path="/verExercise/:id"
                            element={<ExerciseDetail />}
                        />
                        <Route
                            path="/exercisesPage"
                            element={<ExercisesPage />}
                        />
                        <Route
                            path="/exercisesPage/:id"
                            element={<ExercisesPage />}
                        />
                        <Route
                            path="/exercisesPage/:typology"
                            element={<ExercisesPage />}
                        />
                        <Route
                            path="/editExercises/:id"
                            element={<EditExercisePage />}
                        />

                        <Route path="/viewFavoritesList" element={<ViewFavoriteList />}/>


                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>

                {/* Para mostrar las alertas */}
                <ToastContainer
                    position="bottom-center"
                    pauseOnFocusLoss={false}
                    theme="dark"
                />

                <footer>Gym a Boss 2022©</footer>
            </CustomTokenContextProvider>
        </BrowserRouter>
    );
}

export default App;
