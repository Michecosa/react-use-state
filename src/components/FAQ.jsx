import { useState } from "react";

export default function FAQ({ item }) {
  const [open, setAperta] = useState(null);

  function toggleFaq(id) {
    setAperta(open === id ? null : id);
  }

  return (
    <div>
      <h2>Learn Web Development</h2>

      <div className="d-flex gap-2">
        {item.map((element) => (
          <div key={element.id} className="mb-3">
            <button
              className={`mb-4 btn ${
                open === element.id ? "btn-warning" : "btn-primary"
              }`}
              onClick={() => toggleFaq(element.id)}
            >
              {element.title}
            </button>
            {open === element.id && (
              <div className="card p-3 mt-2">
                <h5>{element.title}</h5>
                <div>{element.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
