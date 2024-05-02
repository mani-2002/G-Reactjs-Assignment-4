import React from "react";
import Fullpage from "./Fullpage";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";

function Cardsinfo() {
  return (
    <div className="flex">
      <Fullpage
        designation={["Film Director", "Film producer"]}
        fee="$14/hour"
        name="Jeffrey Abrams"
        age="51"
        location="New York, United States"
        bio="Abrams was born in newyork city and raised in los angeles"
        profile={img1}
        lastDate="2023-08-08T20:11:00"
      />

      <Fullpage
        designation={["Actor", "Film Director"]}
        fee="$9/hour"
        name="Baltasar kormakur"
        age="52"
        location="Reykjavik, Iceland"
        bio="Icelandic actor, theater and film director, and film producer."
        profile={img2}
        lastDate="2023-08-09T20:00:00"
      />
    </div>
  );
}

export default Cardsinfo;
