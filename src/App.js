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
import { useSelector } from "react-redux";
import Categories from "./pages/categories/Categories";
import EditCategory from "./pages/categories/EditCategory";

const App = () => {
  const isAdmin = useSelector((state) => state.user.currentUser.isAdmin);

  // const admin =
  //   localStorage.getItem("persist:root") &&
  //   JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
  //     ?.currentUser?.isAdmin;
  // // const admin = false;
  // console.log("admin", admin);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {isAdmin && (
        <>
          <Route exact path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />

          <Route path="/productlists" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/category/:id" element={<EditCategory />} />
        </>
      )}
    </Routes>
  );
};

export default App;
