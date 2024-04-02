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
  return (
  <div id = "edit-certification-cointaner">
    <div id = "edit-certification-header">
    EditCertification
      </div>
    <form id = "edit-certification-form">
   <div className ="edit-input">
    <label>Title</label>
    <input 
    placeholder = {certification.title}
    onChange={(e) => updateCertification({title: e.target.value})}
    className = "edit-input-field"
    type="text"
    />
   </div>

   <div className ="edit-input">
    <label>Company</label>
    <input 
    placeholder = {certification.Company}
    onChange={(e) => updateCertification({Company: e.target.value})}
    className = "edit-input-field"
    type="text"
    />
   </div>
    </form>
    <button onClick={onSubmit}>Save</button>
  

    </div>)
};

export default EditCertification;
