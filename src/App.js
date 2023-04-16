import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
