import React from "react";
import dog1 from "./images/dog1.jpg";
import cat from "./images/cat.jpg";
import dog2 from "./images/dog2.jpg";

import "./css/photos.css";
import jennie from "./images/jennie.jpeg";
import ryujin from "./images/ryu.jpeg";
import gDragon from "./images/g.jpeg";

function Photos() {
  return (
    <div className="container-fluid Photos">
      <div className="row">
        <div className="col">
          <img src={jennie} alt="jennie" />
        </div>
        <div className="col">
          <img src={ryujin} alt="ryujin" />
        </div>
        <div className="col">
          <img src={gDragon} alt="g-dragon" />
        </div>
      </div>
    </div>
  );
}

export default Photos;
