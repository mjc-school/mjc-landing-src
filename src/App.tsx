import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div id='container'>
        <Header/>
        <Home/>
        {/* <Routes >
          <Route path='/' element={}/>
        </Routes > */}
      </div>
    </Router>
  );
}

export default App;
