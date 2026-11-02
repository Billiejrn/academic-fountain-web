
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Academics from "./sections/Academics";
import OurApproach from "./sections/OurApproach";
import Facilities from "./sections/Facilities";
import Gallery from "./sections/Gallery";
import Admissions from "./sections/Admissions";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <OurApproach />
        <Facilities />
        <Gallery />
        <Admissions />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
