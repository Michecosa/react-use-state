import { useState } from "react";

export default function FAQ({ items }) {
  const [open, setAperta] = useState(null);

  function toggleFaq(id) {
    setAperta(open === id ? null : id);
  }

  return (
    <>
      <div className="d-flex gap-2">
        {items.map((item) => (
          <div key={item.id}>
            <button
              className={`mb-4 btn ${
                open === item.id ? "btn-warning" : "btn-primary"
              }`}
              onClick={() => toggleFaq(item.id)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>

      {items.map(
        (item) =>
          open === item.id && (
            <div key={item.id} className="card p-3 mt-2">
              <h4>{item.title}</h4>
              <p className="mb-0">{item.description}</p>
            </div>
          )
      )}
    </>
  );
}
