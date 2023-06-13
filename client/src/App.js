import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFaound from "./pages/PageNotFaound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./component/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./component/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import User from "./pages/Admin/User";
import Oders from "./pages/user/Oders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CardPage from "./pages/CardPage";
import Mainhomepage from "./pages/Mainhomepage";
import AdminOders from "./pages/Admin/AdminOders";

function App() {
  return (
    < >
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Mainhomepage" element={<Mainhomepage/>}/>

      <Route path="/product/:slug" element={<ProductDetails/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/card" element={<CardPage/>}/>

      <Route path="/category/:slug" element={<CategoryProduct/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/register" element={<Register/>}/>
     <Route path="/forgot-password" element={<ForgotPassword/>}/>
     <Route path="dashboard" element ={<PrivateRoute/>}>
     <Route path="user" element={<Dashboard/>}/>
     <Route path="user/oders" element={<Oders/>}/>
     <Route path="user/Profile" element={<Profile/>}/>
    </Route>
     <Route path="/dashboard" element={<AdminRoute/>}>
     <Route path="admin" element={<AdminDashboard/>}/>
     <Route path="admin/create-category" element={<CreateCategory/>}/>
     <Route path="admin/create-product" element={<CreateProduct/>}/>
     <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
     <Route path="admin/products" element={<Products/>}/>
    <Route path="admin/users" element={<User/>}/>
    <Route path="admin/orders" element={<AdminOders/>}/>

    </Route>
     <Route path="/login" element={<Login/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/policy" element={<Policy/>}/>
     <Route path="*" element={<PageNotFaound/>}/>
</Routes>
    
   
    </>
  );
}

export default App;
