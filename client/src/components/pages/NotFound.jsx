import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, IconButton, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "bootstrap/dist/css/bootstrap.min.css";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#172033",
        height: "100vh",
      }}
    >
      <div className="container pt-2 d-flex flex-column align-items-center">
        <div className="position-relative">
          <h1
            className="text-secondary mb-0"
            style={{
              fontSize: "180px",
            }}
          >
            4
            <span
              style={{
                opacity: "0",
              }}
            >
              0
            </span>
            4
          </h1>
          <div
            className="d-flex align-items-center justify-content-center position-absolute"
            style={{
              background:
                "linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",
              width: "110px",
              height: "110px",
              borderRadius: "16px",
              top: "30%",
              left: "50%",
              transform: "translateX(-55px)",
            }}
          >
            <AccountBalanceWalletIcon
              style={{
                color: "white",
                fontSize: "75px",
              }}
            />
          </div>
        </div>
        <h2 className="text-white">Page Not Found</h2>
        <p className="text-secondary w-50 fs-5 text-center mb-0 mt-1">
          The expense page you're looking for doesn't exist. <br />
          Let's getyou back to managing your finances.
        </p>
        <div className="my-4">
          <div className="d-flex align-items-center gap-3 justify-content-center">
            <Link className="text-decoration-none" to="/dashboard">
              <Card
                className="border border-secondary rounded-3"
                sx={{
                  backgroundColor: "#1E293B",
                  width: "220px",
                }}
                variant="outlined"
              >
                <CardContent className="p-4 d-flex flex-column align-items-center justify-content-center">
                  <IconButton className="bg-info bg-opacity-10 rounded-3">
                    <HomeIcon className="text-primary" />
                  </IconButton>
                  <div className="mt-2 text-center">
                    <p
                      className="mb-0 text-white fw-medium"
                      style={{
                        fontSize: "17px",
                      }}
                    >
                      Dashboard
                    </p>
                    <p className="mb-0 text-secondary">Overview & stats</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link className="text-decoration-none" to="/dashboard">
              <Card
                className="border border-secondary rounded-3"
                sx={{
                  backgroundColor: "#1E293B",
                  width: "220px",
                }}
                variant="outlined"
              >
                <CardContent className="p-4 d-flex flex-column align-items-center justify-content-center">
                  <IconButton className="bg-info bg-opacity-10 rounded-3">
                    <HomeIcon className="text-primary" />
                  </IconButton>
                  <div className="mt-2 text-center">
                    <p
                      className="mb-0 text-white fw-medium"
                      style={{
                        fontSize: "17px",
                      }}
                    >
                      Dashboard
                    </p>
                    <p className="mb-0 text-secondary">Overview & stats</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link className="text-decoration-none" to="/dashboard">
              <Card
                className="border border-secondary rounded-3"
                sx={{
                  backgroundColor: "#1E293B",
                  width: "220px",
                }}
                variant="outlined"
              >
                <CardContent className="p-4 d-flex flex-column align-items-center justify-content-center">
                  <IconButton className="bg-info bg-opacity-10 rounded-3">
                    <HomeIcon className="text-primary" />
                  </IconButton>
                  <div className="mt-2 text-center">
                    <p
                      className="mb-0 text-white fw-medium"
                      style={{
                        fontSize: "17px",
                      }}
                    >
                      Dashboard
                    </p>
                    <p className="mb-0 text-secondary">Overview & stats</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center align-items-center">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            size="large"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
            className="text-white border-info"
            variant="outlined"
          >
            Go Back
          </Button>
          <Button
            startIcon={<HomeIcon />}
            className="bg-primary"
            size="large"
            variant="contained"
          >
            <Link to="/dashboard" className="text-decoration-none text-white  ">
              Go to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
