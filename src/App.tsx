import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="relative min-h-screen transition-colors bg-(--color-surface) text-(--color-text)">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

