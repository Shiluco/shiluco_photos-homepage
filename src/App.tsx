//library
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CustomEase } from "gsap/CustomEase";
import gsap from "gsap";
gsap.registerPlugin(CustomEase);
CustomEase.create("iOSEaseInOut", "0.42, 0.0, 0.58, 1.0");

//component
import Top from "./components/pages/Top";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Gallery from "./components/pages/Gallery";
import Layout from "./components/Layout"; // Layout をインポート
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { useState } from "react";

// App コンポーネント
function App() {
  const [showOpening, setShowOpening] = useState(true); // 初回のみ表示するための状態

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Top
                  showOpening={showOpening}
                  setShowOpening={setShowOpening}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
