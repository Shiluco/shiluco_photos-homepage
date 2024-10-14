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
import Login from "./components/pages/login";
import Edit from "./components/pages/Edit";
import EditProfile from "./components/pages/EditProfile";
import EditPhoto from "./components/pages/EditPhoto";

import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { PageProvider } from "../context/TransitionContext";
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
                <Route path="/login" element={<Login />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/edit/profile" element={<EditProfile />} />
                <Route path="/edit/photo" element={<EditPhoto />} />
              </Routes>
            </Layout>
          </PageProvider>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
