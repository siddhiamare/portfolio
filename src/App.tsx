import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Notes from "./components/Notes";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <SelectedWorks />
        <Notes />
        <Explorations />
        <Stats />
        <Footer />
      </main>
    </>
  );
}

export default App;
