import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EmpCreate = () => {
  // const[id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  // const [validation, setValidation] = useState(false);

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errormessage = "Please enter the value in ";
    if (name === null || name === "") {
      isProceed = false;
      errormessage += " Name";
    }
    if (email === null || email === "") {
      isProceed = false;
      errormessage += " Email";
    }
    if (phone === null || phone === "") {
      isProceed = false;
      errormessage += " Phone";
    }
    if (!isProceed) {
      toast.warning(errormessage);
    }
    else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isProceed = false;
        toast.warning('Please enter the valid email');
      }
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const empData = { name, email, phone, active };

    if (isValidate()) {
      fetch("http://localhost:8000/employee", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empData),
      })
        .then(() => {
          toast.success("Saved successfully");
          navigate("/");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  // const generateId = () => {
  //   const maxValue = 1000;
  //   return Math.floor(Math.random() * maxValue);
  // };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input disabled="disabled" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      />
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button type="submit" className="btn btn-success">
                        Save
                      </button>
                      <Link to={"/"} className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
