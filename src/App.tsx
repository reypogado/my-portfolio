// import About, Services, Contact...

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import MyWorks from "./sections/MyWorks";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <MyWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
