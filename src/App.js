import "./App.css";

import { CustomNavbar } from "./components/navbar/CustomNavbar";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserList } from "./pages/userlist/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/new-user/NewUser.jsx";
import { Product } from "./components/product/Product";
import { ProductList } from "./components/product-list/ProductList";
import { NewProduct } from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

const App = () => {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {admin && (
        <>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />

          <Route path="/productlists" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </>
      )}
    </Routes>
  );
};

export default App;
