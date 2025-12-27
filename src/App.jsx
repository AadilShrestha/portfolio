import { useState, useEffect } from "react";
import Pages from "./components/Pages";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/animated/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className="text-[#C7C7C7] bg-[#0A0A0A] relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(211,233,122,0.05),transparent_50%)] pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.03),transparent_50%)] pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />
        
        {!isLoading && <ScrollProgress />}
        {!isLoading && <Navbar />}
        <Pages />
      </div>
    </>
  );
}

export default App;
