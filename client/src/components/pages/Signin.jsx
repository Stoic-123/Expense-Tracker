import * as React from "react";
import { Link } from "react-router-dom";
import { TextField, InputAdornment, Button } from "@mui/material";
import { Checkbox, Form, Input } from "antd";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";
import "./signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

const Signin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();
  return (
    <div className="container d-flex flex-column align-items-center mt-5 text-white">
      <div className="text-center">
        <h1 className="login-text">ExpenseTracker</h1>
        <p
          style={{
            fontSize: "19px",
          }}
        >
          Welcome back to your financial journey
        </p>
      </div>
      <div className="col-12 col-md-4 mt-3">
        <div className="card" style={glassStyle}>
          <h2 className="text-center">Sign In</h2>
          <p
            className="text-center"
            style={{
              color: "#A87EC2FF",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            Access your personalized dashboard
          </p>
          <form className="mt-3 mb-1">
            <div>
              <TextField
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
                autoComplete="none"
              />
            </div>
            <div>
              <TextField
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
            <div className="d-flex justify-content-between align-items-center">
              <Form.Item className="mt-3 ms-1 ">
                <Checkbox className="text-white">Remember me</Checkbox>
              </Form.Item>
              <div>
                <Link className="forgotPassword" to="/auth/fortgot-password">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div>
              <Button
                className="login-submit"
                fullWidth
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
          <hr className="text-secondary" />
          <div className="text-center">
            <p className="text-light">
              Don't have an account?{" "}
              <Link
                to="/auth/signup"
                className=" text-white-50"
              >
                Create new one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
