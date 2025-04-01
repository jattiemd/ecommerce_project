import { useState } from "react";

function Accordian({title, content, open}) {
  const [accordianOpen, setAccordianOpen] = useState(open);

  const handleAccordian = () => setAccordianOpen(!accordianOpen);


    return (
      <div className="py-2 border-r border-b">
        <button
          onClick={handleAccordian}
          className="flex justify-between w-full cursor-pointer"
        >
          <span className="ml-2 text-xl font-semibold">{title}</span>
          {accordianOpen ? (
            <span className="mr-6 text-2xl">-</span>
          ) : (
            <span className="mr-6 text-2xl">+</span>
          )}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            accordianOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden p-2">{content}</div>
        </div>
      </div>
    );
}

export default Accordian