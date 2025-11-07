export default function Card({ items, open }) {
  return (
    <div className="card p-3 mt-2">
      {open === null ? (
        <p className="mb-0 text-center">Nessun linguaggio selezionato</p>
      ) : (
        items.map(
          (item) =>
            open === item.id && (
              <>
                <h4 key={item.id}>{item.title}</h4>
                <p className="mb-0">{item.description}</p>
              </>
            )
        )
      )}
    </div>
  );
}
