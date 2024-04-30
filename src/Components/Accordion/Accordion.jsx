import React, { useState } from 'react';
import './Accordion.css'

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div><h3>{title}</h3></div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;