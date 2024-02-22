import { useContext, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ThemeContext from "./context/ThemeContext";
import "./stylesheets/main.scss";

function App() {
  const { isDark } = useContext(ThemeContext);
  useEffect(() => {
    document.body.classList.toggle("theme--dark", isDark);
    document.body.classList.toggle("theme--light", !isDark);
  }, [isDark]);
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  );
}

export default App;
