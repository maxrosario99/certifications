import React from "react";

const EditCertification = (certification, setCertification, show, setShown) => {
  function updateCertification(value) {
    console.log(value);
    const copy = { ...certification };
    copy[Object.keys(value)[0]] = value[Object.keys(value)[0]];
    setNewProfile(copy);
  }
  function onSubmit() {
    setCertification(newCertification);

    setShow(!show);
  }
  return <div>EditCertification</div>;
};

export default EditCertification;
