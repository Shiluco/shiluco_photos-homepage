//library
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//component
import Top from './components/pages/Top'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import All from './components/pages/gallery/All'
import ClientWork from './components/pages/gallery/Clientwork'
import Portrait from './components/pages/gallery/Portrait'
import Scenery from "./components/pages/gallery/Scenery";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
//css


function App()
{
  const [showOpening, setShowOpening] = useState(true); // 初回のみ表示するための状態

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Top showOpening={showOpening} setShowOpening={setShowOpening} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<All />} />
            <Route path="/gallery/client-work" element={<ClientWork />} />
            <Route path="/gallery/portrait" element={<Portrait />} />
            <Route path="/gallery/Scenery" element={<Scenery />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App
