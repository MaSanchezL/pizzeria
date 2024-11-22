import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPage from "./components/NavbarPage";

function App() {
  return (
    <>
      <NavbarPage></NavbarPage>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
