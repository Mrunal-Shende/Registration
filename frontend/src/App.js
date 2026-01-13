import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Add User</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
