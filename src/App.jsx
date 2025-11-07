import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from "./components/Main.jsx";
import faqs from "./data/languages.js";

function App() {
  return (
    <>
      <Main items={faqs} />
    </>
  );
}

export default App;
