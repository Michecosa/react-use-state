export default function Buttons({ items, open, toggleFaq }) {
  return (
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
  );
}
