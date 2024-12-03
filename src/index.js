import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
    <ThemeProvider>
      <App/>
      <ToastContainer
        position="top-center" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="colored"
        theme="light"  // Set theme to light
        toastClassName={() => 'bg-transparent shadow-none p-0'} // Override toast styles
        bodyClassName={() => ''}  // Remove body styles
      />
      </ThemeProvider>
    </BrowserRouter>
  </React.Fragment>
);
