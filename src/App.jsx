import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Apropos from './views/Apropos';
import Menu from './views/Menu';
import Logout from './views/Logout';
import MyPngs from './views/myPngs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/mypngs" element={<MyPngs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
