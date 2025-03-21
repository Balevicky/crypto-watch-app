import React from "react";

const TableFilters = () => {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoin" defaultChecked="true" />
          <label htmlFor="stableCoin">Avec stable coin</label>
        </div>
        <div className="no-liste-btn">
          <p>Aucune liste</p>
        </div>
        <div className="fav-list">
          <p>Liste des fovorites</p>
          <img src="./assets/star-full.svg" alt="icon star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
