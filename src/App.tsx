import { Navbar } from "./components/navbar/Navbar";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;

