import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/about.js";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00023b";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/about",
      element: (
        <>
          <div>
            <Navbar
              title="Textutils"
              aboutText="About Textutils"
              mode={mode}
              toggleMode={toggleMode}
            ></Navbar>
            <Alert alert={alert}></Alert>
            <About></About>,
          </div>
        </>
      ),
      exact: true,
    },
    {
      path: "/",
      element: (
        <>
          <Navbar
            title="Textutils"
            aboutText="About Textutils"
            mode={mode}
            toggleMode={toggleMode}
          ></Navbar>
          <Alert alert={alert}></Alert>
          <div className="container my-3">
            <TextForm
              heading="Enter the text to analyze below"
              mode={mode}
              showAlert={showAlert}
            ></TextForm>
          </div>
        </>
      ),
      exact: true,
    },
  ]);
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}></RouterProvider>
  );
  //   return (
  //     <>
  //       <Navbar
  //         title="Textutils"
  //         aboutText="About Textutils"
  //         mode={mode}
  //         toggleMode={toggleMode}
  //       ></Navbar>
  //       <Alert alert={alert}></Alert>
  //       <div className="container my-3">
  //         <TextForm
  //           heading="Enter the text to analyze below"
  //           mode={mode}
  //           showAlert={showAlert}
  //         ></TextForm>
  //       </div>
  //     </>
  //   );
}

export default App;
