import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100">
      <a
        href="#main-content"
        className="sr-only absolute left-4 top-4 z-[60] rounded-md bg-orange px-4 py-2 text-sm font-semibold text-black focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="relative">
        <Pages />
      </main>
    </div>
  );
}

export default App;
