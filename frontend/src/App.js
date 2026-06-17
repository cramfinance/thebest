import { useEffect } from "react";
import "@/App.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageMotion from "@/components/PageMotion";
import RouteProgress from "@/components/RouteProgress";
import Home from "@/pages/Home";
import Accounts from "@/pages/Accounts";
import Apps from "@/pages/Apps";
import Cards from "@/pages/Cards";
import Compare from "@/pages/Compare";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";
import ProductDetail from "@/pages/ProductDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageMotion><Home /></PageMotion>} />
        <Route path="/accounts" element={<PageMotion><Accounts /></PageMotion>} />
        <Route path="/accounts/:slug" element={<PageMotion><ProductDetail /></PageMotion>} />
        <Route path="/apps" element={<PageMotion><Apps /></PageMotion>} />
        <Route path="/apps/:slug" element={<PageMotion><ProductDetail /></PageMotion>} />
        <Route path="/cards" element={<PageMotion><Cards /></PageMotion>} />
        <Route path="/cards/:slug" element={<PageMotion><ProductDetail /></PageMotion>} />
        <Route path="/compare" element={<PageMotion><Compare /></PageMotion>} />
        <Route path="/about" element={<PageMotion><About /></PageMotion>} />
        <Route path="/contact" element={<PageMotion><Contact /></PageMotion>} />
        <Route path="/disclosure" element={<PageMotion><Legal kind="disclosure" /></PageMotion>} />
        <Route path="/privacy" element={<PageMotion><Legal kind="privacy" /></PageMotion>} />
        <Route path="/terms" element={<PageMotion><Legal kind="terms" /></PageMotion>} />
        <Route path="*" element={<PageMotion><Home /></PageMotion>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <RouteProgress />
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
