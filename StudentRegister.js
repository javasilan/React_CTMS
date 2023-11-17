import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StudentRegister = () => {
  const [id, setId] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");
  const [selectroute, setSelectRoute] = useState("");
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();

  const isValidate = () => {
    let isValid = true;
    let errorMessage = "Please enter a value for: ";

    if (!id) {
      isValid = false;
      errorMessage += "Email, ";
    }
    if (!username) {
      isValid = false;
      errorMessage += "Full Name, ";
    }
    if (!password) {
      isValid = false;
      errorMessage += "Password, ";
    }

    // Validate email using a regular expression
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(id)) {
      // Valid email
    } else {
      isValid = false;
      toast.warning("Please enter a valid email");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id,
      username,
      password,
      phone,
      branch,
      address,
      selectroute,
      gender,
    };

    if (isValidate()) {
      // Send the registration request to your Spring Boot application
      fetch("http://localhost:8090/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((response) => {
          if (response.ok) {
            // Registration succeeded
            toast.success("Registered successfully.");
            navigate("/login");
          } else {
            // Handle registration error
            return Promise.reject("Registration failed.");
          }
        })
        .catch((err) => {
          toast.error("Failed: " + err);
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="row mt-5 p-2">
    <div className="offset-lg-3 col-lg-6 mt-2">
      <div className="card">
        <div className="card-header bg-warning">
          <h1 className="text-center ">User Registration</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Email <span className="errmsg">*</span></label>
                <input
                  type="email"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Full Name <span className="errmsg">*</span></label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Branch</label>
                <input
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Select Route</label>
            <input
              type="text"
              value={selectroute}
              onChange={(e) => setSelectRoute(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Gender <span className="errmsg">*</span></label>
            <div className="d-flex ">
              <div className="form-check mr-3">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check mx-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">
            Register
          </button>{" "}
          |
          <Link to="/login" className="btn btn-danger">
            Close
          </Link>
        </div>
      </div>
    </div>
  </div>
  </form>  
  );
};

export default StudentRegister;
