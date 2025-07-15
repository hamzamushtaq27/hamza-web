import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from '../../page/main';
// import Login from '../../page/Login/loginPage'
// import Profile from '../../page/Profile/ProfilePage';
// import SpecDetail from "../Specification/SpecDetail";
// import CellDetail from "../Specification/SpecDetail/SpecTable/CellDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;