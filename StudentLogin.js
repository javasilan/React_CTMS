import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null); // State to store user data
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      if (email === "admin@cutm.ac.in" && password === "admin") {
        navigate('/adminp'); // Redirect to the admin URL
        return; // Exit the function to prevent further execution
      }

      // Student Login
      fetch("http://localhost:8090/student/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then((res) => {
          if (res.status === 401) {
            toast.error('Please Enter valid student credentials');
          } else if (res.status === 200) {
            return res.json();
          } else {
            toast.error('Student Login Failed');
          }
        })
        .then((resp) => {
          if (resp) {
            toast.success('Student Login Successful');
            sessionStorage.setItem('email', email);
            setUserData(resp);
            navigate('/sh');
          }
        })
        .catch((err) => {
          toast.error('Student Login Failed due to: ' + err.message);
        });

      fetch("http://localhost:8090/faculty/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then((res) => {
          if (res.status === 401) {
            toast.error('Please Enter valid faculty credentials');
          } else if (res.status === 200) {
            return res.json();
          } else {
            toast.error('Faculty Login Failed');
          }
        })
        .then((resp) => {
          if (resp) {
            toast.success('Faculty Login Successful');
            sessionStorage.setItem('email', email);
            setUserData(resp);
            navigate('/fh');
          }
        })
        .catch((err) => {
          toast.error('Faculty Login Failed due to: ' + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false;
      toast.warning('Please Enter Email');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <div>
        <Navbar />
      </div>
      <div className="row flex-grow-1">
        <div className="offset-lg-4 col-lg-4" style={{ marginTop: '100px' }}>
          <form onSubmit={proceedLogin} className="container">
            <div className="card">
              <div className="card-header text-center text-primary">
                <h2>User Login</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Email <span className="errmsg">*</span></label>
                  <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" type="email" />
                </div>
                <div className="form-group">
                  <label>Password <span className="errmsg">*</span></label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
        {userData && (
        <div className="user-data">
          <h3>User Data</h3>
          <p>Name: {userData.name}</p>
          <p>Phone: {userData.phone}</p>
          <p>Branch: {userData.branch}</p>
          <p>Address: {userData.address}</p>
          <p>Select Route: {userData.selectroute}</p>
          <p>Gender: {userData.gender}</p>
        </div>
      )}
      </div>
      <div className="text-center p-4" style={{ backgroundColor: 'black', color: 'white' }}>
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://cutm.ac.in/">MCA ST DOMAIN</a>
      </div>
    </div>
  );
}

export default StudentLogin;
