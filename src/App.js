import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";

function App() {
    const [currentRoute, setCurrentRoute] = useState();
    useEffect(() => {
        const path = window.location.pathname;
        setCurrentRoute(path.slice(1,path.length));
    }, []);
  return (
    <BrowserRouter>
      <nav className="m-1 p-3 border border-info">
        <ul className="nav nav-pills">
          <li>
              <Link
                  onClick={()=>setCurrentRoute("home")}
                  className={currentRoute === 'home'?'btn btn-info ms-1':'btn btn-outline-info ms-1'}
                  to={"/home"}>Home</Link>
          </li>
          <li>
              <Link
                  onClick={()=>setCurrentRoute("products")}
                  className={currentRoute === 'products'?'btn btn-info ms-1':'btn btn-outline-info ms-1'}
                  to={"/products"}>Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/products" element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
