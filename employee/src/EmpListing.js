import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empdata, setEmpdata] = useState(null);

  const navigate = useNavigate();
  const LoadDetails = (id) => {
    navigate("/employee/detail/" + id);
  };

  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const RemoveFunction = (id) => {
    console.log(id)
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then(() => {
          alert("Removed successfully");
          // window.location.reload();
          getEmployeeData();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const getEmployeeData = ()=>{
    fetch("http://localhost:8000/employee")
      .then((res) => {
        
        return res.json();
      })
      .then((resp) => {
        setEmpdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to={"/employee/create"} className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          RemoveFunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          LoadDetails(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
