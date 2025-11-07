import FAQ from "./FAQ.jsx";

export default function Main({ items }) {
  return (
    <>
      <div className="container mt-4">
        <FAQ items={items} />
      </div>
    </>
  );
}
