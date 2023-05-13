
import './App.css';
import MainMenu from './components/MainMenu';
import{BrowserRouter as Router, Routes, Route } from"react-router-dom";
import MainImage from "./components/Header";
import AllDogs from "./components/AllDogs";
import Header from "./components/Header";



function App() {
    return (
        <Router>
            <div className="container">

                <Header  />
                <Routes>
                    <Route path="/" element={<MainMenu />} />
                    <Route path="/alldogs" element={<AllDogs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App