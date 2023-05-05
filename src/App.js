
import './App.css';
import MainMenu from './components/MainMenu';
import{BrowserRouter as Router, Routes, Route } from"react-router-dom";
import MainImage from "./components/MainImage";



function App() {
    return (
        <Router>
            <div className="container">
                <MainImage  />
                <MainMenu brand="Dog and Love"  />
                <Routes>
                    <Route path="/"  />
                    <Route path="/register" />
                </Routes>
            </div>
        </Router>
    );
}

export default App