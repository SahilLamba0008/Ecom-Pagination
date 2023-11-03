import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { HomePage, ProductsPage, Footer, Nav } from "./components/index";
import SingleProductPage from "./components/pages/SingleProductPage";

const theme = {
  colors: {
    primaryBg: "#FFFFFF",
    sectionBg: "rgba(86, 178, 128, 0.1)",
    darkSectionBg: "rgba(86, 178, 128, 1)",
    cardBg: "#F7F8FA",
    darkBg: "#272727",
    textPrimary: "#0B254B",
    textWhite: "#ffffff",
    textSecondary: "#56B280",
    textLight: "#5E6E89",
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/products"} element={<ProductsPage />} />
        <Route path={"/singleproduct/:id"} element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
