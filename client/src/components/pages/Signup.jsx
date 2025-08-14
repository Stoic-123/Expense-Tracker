import * as React from "react";
import { Link } from "react-router-dom";
import { TextField, InputAdornment, Button } from "@mui/material";
import { Checkbox, Form, Input } from "antd";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import HttpsIcon from "@mui/icons-material/Https";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const glassStyle = {
  background: "rgba(178, 110, 215, 0.2)", // light purple with transparency
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", // for Safari
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  padding: "2rem",
  color: "#fff",
};

const Signup = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [agreed, setAgreed] = React.useState(false); // checkbox state
  const handleCheckbox = () => {
    setAgreed(!agreed);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();
  const name = firstName + " " + lastName;

  async function fetchSignUp(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        autoClose: 2000,
      });
    }
    try {
      await axios.post("http://localhost:3030/auth/signup", {
        name,
        email,
        password,
      });
      toast.success("Signup successful! Redirecting...", {
        autoClose: 2000,
        onClose: () => {
          navigate("/auth/signin");
        },
      });
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  }
  return (
    <div className="container d-flex flex-column align-items-center mt-5 text-white">
      <div className="text-center">
        <h1 className="login-text">Join Us Today</h1>
        <p
          style={{
            fontSize: "19px",
          }}
        >
          Start your financial transformation
        </p>
      </div>
      <div className="col-12 col-md-8 col-lg-5 mt-3">
        <div className="card" style={glassStyle}>
          <h2 className="text-center">Create Account</h2>
          <p
            className="text-center"
            style={{
              color: "#A87EC2FF",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            Join thousands of smart savers
          </p>
          <form className="mt-3 mb-1">
            <div className="col-12">
              <div className="row gy-4 gy-0">
                <div className="col-12 col-md-6">
                  <TextField
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="off"
                    fullWidth
                    type="text"
                    required
                    sx={{
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#8D56A97A",
                        borderRadius: "6px",
                        color: "white",
                        transition: "outline 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#8D56A97A",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "#8D56A97A",
                          outline: "1px solid white",
                        },
                      },
                    }}
                    label="First Name"
                    placeholder="Enter your first name"
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: "#C9C9C9FF" }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="filled"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <TextField
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="off"
                    fullWidth
                    type="text"
                    required
                    sx={{
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#8D56A97A",
                        borderRadius: "6px",
                        color: "white",
                        transition: "outline 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#8D56A97A",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "#8D56A97A",
                          outline: "1px solid white",
                        },
                      },
                    }}
                    label="Last Name"
                    placeholder="Enter your Last name"
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: "#C9C9C9FF" }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="filled"
                  />
                </div>
              </div>
            </div>
            <div>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="mt-4"
                type="email"
                required
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#8D56A97A",
                    borderRadius: "6px",
                    color: "white",
                    transition: "outline 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#8D56A97A",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#8D56A97A",
                      outline: "1px solid white",
                    },
                  },
                }}
                label="Email"
                placeholder="Enter your email"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#C9C9C9FF" }} />
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
            </div>
            <div>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
                variant="filled"
                className="mt-4"
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#8D56A97A",
                    borderRadius: "6px",
                    color: "white",
                    transition: "outline 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#8D56A97A",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#8D56A97A",
                      outline: "1px solid white",
                    },
                  },
                }}
                placeholder="Enter your password"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                label="Password"
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsIcon sx={{ color: "#C9C9C9FF" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "#C9C9C9FF" }} />
                        ) : (
                          <Visibility sx={{ color: "#C9C9C9FF" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="off"
                required
                variant="filled"
                className="mt-4"
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#8D56A97A",
                    borderRadius: "6px",
                    color: "white",
                    transition: "outline 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#8D56A97A",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#8D56A97A",
                      outline: "1px solid white",
                    },
                  },
                }}
                placeholder="Enter your confirm password"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                label="Confirm Password"
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsIcon sx={{ color: "#C9C9C9FF" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "#C9C9C9FF" }} />
                        ) : (
                          <Visibility sx={{ color: "#C9C9C9FF" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <Form.Item className="mt-3 ms-1 ">
                <Checkbox
                  checked={agreed}
                  onChange={handleCheckbox}
                  className="text-white"
                >
                  I agree to the Terms of Service and Privacy Policy
                </Checkbox>
              </Form.Item>
            </div>
            <div>
              <Button
                onClick={fetchSignUp}
                className="login-submit"
                fullWidth
                variant="contained"
                type="submit"
                disabled={!agreed}
              >
                Create an account
              </Button>
            </div>
          </form>
          <hr className="text-secondary" />
          <div className="text-center">
            <p className="text-light">
              Already have an account?
              <Link to="/auth/signin" className=" text-white-50 ms-1">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Signup;
