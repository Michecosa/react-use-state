export default function FAQ({ item }) {
  console.log("FAQ renderizzato", item);

  return (
    <div>
      <h2>Learn Web development</h2>
      <div className="d-flex">
        {item.map((element) => (
          <button key={element.id} className="btn btn-primary mx-2">
            {element.title}
          </button>
        ))}
      </div>
    </div>
  );
}
