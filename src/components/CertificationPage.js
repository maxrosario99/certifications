import React, { useState } from "react";

const certification = (certification, show, setShow) => {
  return (
    <div id="Certification-Container">
      <div
          className="circle-button"
          id="certifications-edit"
          onClick={() => setShow(!show)}
        >
          EDIT
        </div>
      <div className="individual-certification">
        <p1> {certification.title} </p1>
        <p2> {certification.Company}</p2>
        <p3> {certification.Issue}</p3>

        <button id="show-credential">Show Credential</button>
      </div>
    </div>
  );
};

export default certification;
