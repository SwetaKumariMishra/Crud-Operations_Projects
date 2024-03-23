import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
  const { empid } = useParams();
  const [empData, setEmpdata] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2 style={{padding: '15px'}}>Employee Details</h2>
        </div>
        <div className="card-body">
          {empData && (
            <div>
              <h2>
                The Employee name is : {empData.name} ({empData.id})
              </h2>
              <h3>Contact Details</h3>
              <h5>Email is: {empData.email} </h5>
              <h5>Phone is : {empData.phone} </h5>
              <Link className="btn btn-danger" to={"/"}>
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetails;
