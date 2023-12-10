import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import User from './components/User';
import AddUser from './components/AddUser/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}/>
        <Route path="/add-user" element={<AddUser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
