import "./styles/main.scss";
import AppRouter from "./router/AppRouter";
import Nav from "./components/Nav/Nav";
import Footer from "./components/layouts/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
