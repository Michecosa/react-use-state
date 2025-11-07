import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import FAQ from "./components/FAQ.jsx";
import faqs from "./data/languages.js";

function App() {
  return (
    <>
      <FAQ items={faqs} />
    </>
  );
}

export default App;
