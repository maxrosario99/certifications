import React, { useState } from "react";
import Certification from "./CertificationPage";
import EditCertification from "./EditCertification";

const Layout = () => {
  const [certification, setCertification] = useState({
    title: "Exam 762: Developing SQL Databases",
    Company: "Microsoft",
    Issue: "Issued May 2020",
  });
  const [show, setShow] = useState(false);

  return (
    <div>
      <Certification
        certification={certification}
        setCertification={setCertification}
      />
      <EditCertification
        show={show}
        setShow={setShow}
        certification={certification}
        setCertification={setCertification}
      />
    </div>
  );
};

export default Layout;
