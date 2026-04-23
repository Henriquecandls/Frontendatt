import React from "react";
import LeftMenu from "./LeftMenu";
import MainContent from "./maincontent";

function Content() {
  return (
    <div className="row border">
      <LeftMenu />
      <MainContent />
    </div>
  );
}

export default Content;
