import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton, TextField, InputAdornment, Button } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import EmailIcon from "@mui/icons-material/Email";
import ShieldIcon from "@mui/icons-material/Shield";
import { Input } from "antd";
import HttpsIcon from "@mui/icons-material/Https";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import "./forgotPass.css";
const glassStyle = {
  background: "rgba(178, 110, 215, 0.2)", // light purple with transparency
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", // for Safari
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  padding: "0rem",
  color: "#fff",
};
const ForgotPass = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };
  return (
    <div className="container  d-flex flex-column align-items-center mt-5 text-white">
      <div className="text-center">
        <h1 className="login-text">Reset Password</h1>
        <p
          style={{
            fontSize: "19px",
          }}
        >
          Secure password recovery process
        </p>
      </div>
      <div className="my-4 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div>
            <IconButton
              sx={{
                backgroundColor: "orange",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
              className="text-white"
            >
              <EmailIcon />
            </IconButton>
          </div>
          <p className="text-light">Email</p>
        </div>
        <hr
          className="mx-3"
          style={{
            height: "2px",
            width: "70px",
            backgroundColor: "white",
          }}
        />

        <div className="text-center">
          <div>
            <IconButton
              sx={{
                backgroundColor: "#A5A4A465",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
              className="text-white"
            >
              <ShieldIcon />
            </IconButton>
          </div>
          <p className="text-light">Verify</p>
        </div>
        <hr
          className="mx-3"
          style={{
            height: "2px",
            width: "70px",
            backgroundColor: "white",
          }}
        />
        <div className="text-center">
          <div>
            <IconButton
              sx={{
                backgroundColor: "#A5A4A465",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
              className="text-white"
            >
              <LockIcon />
            </IconButton>
          </div>
          <p className="text-light">Reset</p>
        </div>
      </div>
      <div className="col-12 col-md-5 ">
        <div className="card p-4" style={glassStyle}>
          <h2 className="text-center">Enter Your Email</h2>
          <p
            className="text-center"
            style={{
              color: "#A87EC2FF",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            We'll send you a verification code
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
            <div className="col-12 my-4">
              <div className="card border-danger p-3  " style={glassStyle}>
                <div className="d-flex align-items-start">
                  <ReportIcon />
                  <p
                    className="ms-2 text-warning mb-0"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    Make sure to use the same email address you used to create
                    your account.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  className="login-submit"
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  Send Verification code
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-12 col-md-5 d-none">
        <div className="card p-4" style={glassStyle}>
          <h2 className="text-center">Enter Verification Code</h2>
          <p
            className="text-center mb-0"
            style={{
              color: "#A87EC2FF",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            We sent a 6-digit code to
          </p>

          <p
            className="text-center mt-1"
            style={{
              color: "#BBA6C9FF",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            zealong292@gmail.com
          </p>

          <form className="mt-3 mb-1">
            <p
              className="text-center mt-1 text-uppercase"
              style={{
                color: "#FFFFFFFF",
                fontSize: "17px",
                fontWeight: "500",
              }}
            >
              Verification Code
            </p>
            <div className="text-center">
              <Input.OTP
                size="large"
                formatter={(str) => str.toUpperCase()}
                {...sharedProps}
              />
            </div>
            <div className="mt-4">
              <Button
                className="login-submit"
                fullWidth
                variant="contained"
                type="submit"
              >
                Verify the code
              </Button>
            </div>
            <div className="text-center mt-4">
              <p className="text-light">
                Didn't receive the code?
                <Link
                  to="/auth/forgot-password"
                  className=" text-white-50 ms-2"
                >
                  Resend Code
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="col-12 col-md-5 d-none">
        <div className="card p-4" style={glassStyle}>
          <h2 className="text-center">Enter Your Email</h2>
          <p
            className="text-center"
            style={{
              color: "#A87EC2FF",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            We'll send you a verification code
          </p>
          <form className="mt-3 mb-1">
            <div>
              <TextField
                required
                variant="filled"
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
                placeholder="Enter your new password"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                label="New Password"
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
            <div className="col-12 my-4">
              <div className="card border-danger p-3  " style={glassStyle}>
                <div className="d-flex align-items-start">
                  <ReportIcon />
                  <p
                    className="ms-2 text-warning mb-0"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    Make sure to use the same email address you used to create
                    your account.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  className="login-submit"
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  Reset Password
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
