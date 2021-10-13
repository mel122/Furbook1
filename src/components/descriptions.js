import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Jennie</h5>
          <p className="sub-text">
            One of the most iconic fashionistas of our time. Whenever she wears
            anything (usually chanel), it instantly sells out.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">G-dragon</h5>
          <p className="sub-text">
            An oldie but a goodie. G-dragon is known for his unique and artistic
            pieces. No wonder so many catalogs have used him as a muse!
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Ryujin</h5>
          <p className="sub-text">
            An upcoming artist with big influence on new trends. Almost everyone
            knows her!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
