import "./App.css";

import { CustomNavbar } from "./components/navbar/CustomNavbar";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserList } from "./pages/userlist/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/new-user/NewUser.jsx";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/newUser" element={<NewUser />} />
    </Routes>
  );
};

export default App;
