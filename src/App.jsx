import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import faqs from "./data/languages.js";

function App() {
  return (
    <>
      <Header />
      <Main items={faqs} />
    </>
  );
}

export default App;
