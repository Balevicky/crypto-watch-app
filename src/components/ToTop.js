import React from "react";
// Ce composant permet aller haut de la page quand on est en bas
const ToTop = () => {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      <img src="./assets/arrow-icon.svg" alt="arrow-icon" />
    </div>
  );
};

export default ToTop;
