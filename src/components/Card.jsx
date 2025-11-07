export default function Card({ items, open }) {
  return (
    <>
      {items.map(
        (item) =>
          open === item.id && (
            <div key={item.id} className="card p-3 mt-2">
              {" "}
              <h4>{item.title}</h4> <p className="mb-0">{item.description}</p>{" "}
            </div>
          )
      )}
    </>
  );
}
