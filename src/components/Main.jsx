import FAQ from "./FAQ.jsx";

export default function Main({ items }) {
  return (
    <>
      <div class="container mt-5">
        <FAQ items={items} />
      </div>
    </>
  );
}
