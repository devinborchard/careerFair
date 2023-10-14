import Home from './components/Home';
import CareerFair from './components/careerFair';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='global-div'>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
            <Route path="/Newmarket" element={<CareerFair/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;
