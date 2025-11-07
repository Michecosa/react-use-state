import Buttons from "./Buttons";
import Card from "./Card";
import { useState } from "react";

export default function FAQ({ items }) {
  const [open, setAperta] = useState(null);

  function toggleFaq(id) {
    setAperta(open === id ? null : id);
  }

  return (
    <>
      <Buttons items={items} open={open} toggleFaq={toggleFaq} />
      <Card items={items} open={open} />
    </>
  );
}
