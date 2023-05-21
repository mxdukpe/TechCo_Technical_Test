import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Yin from './views/Yin';
import Login from './views/Login';
import Yang from './views/Yang';
import Register from './views/Register';
import Apropos from './views/Apropos';
import Menu from './views/Menu';
import Logout from './views/Logout';
import User from './views/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/yin" element={<Yin />} />
          <Route path="/yang" element={<Yang />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
