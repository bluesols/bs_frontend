import React from "react";
import Navbar from "./components/Navbar";
import './components/style.css';
import ReactDOM from "react-dom/client";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
   <>
   <div class="container" id="main-container">
    <Navbar/>
   </div>

   </>
    
  );
}

export default App;

