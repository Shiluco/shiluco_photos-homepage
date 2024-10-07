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
import { PageProvider } from "./context/TransitionContext";
import { Provider } from "react-redux";
import { store } from "../store/store";

// App コンポーネント
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <PageProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </Layout>
          </PageProvider>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
