
import './App.css';
import MainMenu from './components/MainMenu';
import{BrowserRouter as Router, Routes, Route } from"react-router-dom";
import AllDogs from "./components/AllDogs";
import Header from "./components/Header";
import SingleDog from "./components/SingleDog";
import AddDog from "./components/AddDog";



function App() {
    return (
        <Router>
            <div className="container">

                <Header  />
                <Routes>
                    <Route path="/" element={<MainMenu />} />
                    <Route path="/alldogs" element={<AllDogs />} />
                    <Route path="/dog/:dogid" element={<SingleDog />} />
                    <Route path="/adddog" element={<AddDog  />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App