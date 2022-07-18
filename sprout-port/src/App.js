import "./App.css";
import React, { useState } from "react";


// import components 
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Projects";
import Footer from "./components/Footer";

function App () {

  const [currentPage, handlePage] = useState("Home");

  //switch statement that returns correct component
  const renderPage = () => {
    const page = currentPage;
    switch (page) {
      case "About":
      return <About />
      case "Portfolio":
        return <Portfolio />;
        case "Contact":
          return <Contact />;
          case "Resume":
          return <Resume />
          default:
            return <Home />;
    }
  }

  return (
    <section>
      <Header />
      <Nav currentPage={currentPage} handlePage={handlePage} />

      <div>
        {
          renderPage(currentPage)
        }
      </div>
      <Footer />
    </section>
  );
}

export default App;
