import "./App.css";

import { CustomNavbar } from "./components/navbar/CustomNavbar";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { Home } from "./pages/home/Home";

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
