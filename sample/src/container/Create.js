import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = {"Access-Control-Allow-origin": "*"}

  const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(
          "https://659458f01493b011606a6577.mockapi.io/crud-project",
          {
          name: name,
          email: email,
          header,
        })
        
        .then(()=> {
        history("/read");
        });
  };

  return (
    <>
    <div className='d-flex justify-content-between m-2 mt-5'>
    <h2>Create</h2>
    <Link to="/read">
    <button className='btn btn-primary'>Show Data</button>
    </Link>
    
    </div>
      <form>
      <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </>
  )
}

export default Create;