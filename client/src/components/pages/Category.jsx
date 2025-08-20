import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import "./category.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  border: "1px solid #000",
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
  bgcolor: "#020817",
  color: "white",
  p: 3,
  borderRadius: "6px",
};
const presetColors = [
  "#FF8A00",
  "#4DA6FF",
  "#D96EFF",
  "#34C759",
  "#FF5E57",
  "#FF2D95",
  "#FFD43B",
  "#5E60CE",
];

const Category = ({ isDark }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [color, setColor] = useState(presetColors[0]);

  return (
    <div className="vh-100 ">
      <div className="d-flex align-items-center justify-content-between">
        <div className="mt-4">
          <h2>Categories</h2>
          <p className="text-secondary">Manage your expense categories</p>
        </div>
        <div>
          <Button
            onClick={handleOpen}
            startIcon={<AddIcon />}
            variant="contained"
          >
            Add Category
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <h5 className="mb-3">Add New Category</h5>
                <form action="">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Category Name
                    </label>
                    <input
                      placeholder="e.g., Travel, Education"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "white",
                        boxShadow:
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
                        fontSize: "14px",
                      }}
                      type="text"
                      className="form-control mt-1 py-2"
                    />
                  </div>
                </form>
                <div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    {presetColors.map((preset) => (
                      <div
                        key={preset}
                        onClick={() => setColor(preset)}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 8,
                          background: preset,
                          border:
                            color === preset
                              ? "3px solid white"
                              : "2px solid transparent",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 d-flex align-items-center justify-content-end">
                  <Button
                    onClick={handleClose}
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
                    }}
                    variant="outlined text-white"
                  >
                    Cancel
                  </Button>
                  <Button className="ms-3 text-black" variant="contained">
                    Add Category
                  </Button>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
      <div className="row gy-md-4 gy-3 ">
        <div className="col-12 col-md-4">
          <div
            className="card p-4 border-radius"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
              borderRadius: "6px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "yellow",
                    borderRadius: "50%",
                  }}
                ></span>
                <h5 className={isDark ? "mb-0 text-white" : "mb-0 text-black"}>
                  Food
                </h5>
              </div>
              <IconButton>
                <DeleteIcon className={isDark ? "text-white" : "text-black"} />
              </IconButton>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
              <p className="text-secondary mb-0 ">Total Spent</p>
              <h5 className={isDark ? "text-white mb-0" : "text-black mb-0"}>
                $450.00
              </h5>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-secondary mb-0 ">Expenses</p>
              <Chip
                color="primary"
                className="text-white"
                size="small"
                label="25"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="card p-4 border-radius"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
              borderRadius: "6px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "blue",
                    borderRadius: "50%",
                  }}
                ></span>
                <h5 className={isDark ? "mb-0 text-white" : "mb-0 text-black"}>
                  Transport
                </h5>
              </div>
              <IconButton>
                <DeleteIcon className={isDark ? "text-white" : "text-black"} />
              </IconButton>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
              <p className="text-secondary mb-0 ">Total Spent</p>
              <h5 className={isDark ? "text-white mb-0" : "text-black mb-0"}>
                $450.00
              </h5>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-secondary mb-0 ">Expenses</p>
              <Chip
                color="primary"
                className="text-white"
                size="small"
                label="25"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="card p-4 border-radius"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
              borderRadius: "6px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "dodgerblue",
                    borderRadius: "50%",
                  }}
                ></span>
                <h5 className={isDark ? "mb-0 text-white" : "mb-0 text-black"}>
                  Entertainment
                </h5>
              </div>
              <IconButton>
                <DeleteIcon className={isDark ? "text-white" : "text-black"} />
              </IconButton>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
              <p className="text-secondary mb-0 ">Total Spent</p>
              <h5 className={isDark ? "text-white mb-0" : "text-black mb-0"}>
                $450.00
              </h5>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-secondary mb-0 ">Expenses</p>
              <Chip
                color="primary"
                className="text-white"
                size="small"
                label="25"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="card p-4 border-radius"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
              borderRadius: "6px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                  }}
                ></span>
                <h5 className={isDark ? "mb-0 text-white" : "mb-0 text-black"}>
                  Utilities
                </h5>
              </div>
              <IconButton>
                <DeleteIcon className={isDark ? "text-white" : "text-black"} />
              </IconButton>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
              <p className="text-secondary mb-0 ">Total Spent</p>
              <h5 className={isDark ? "text-white mb-0" : "text-black mb-0"}>
                $450.00
              </h5>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-secondary mb-0 ">Expenses</p>
              <Chip
                color="primary"
                className="text-white"
                size="small"
                label="25"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="card p-4 border-radius"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
              borderRadius: "6px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "greenyellow",
                    borderRadius: "50%",
                  }}
                ></span>
                <h5 className={isDark ? "mb-0 text-white" : "mb-0 text-black"}>
                  Utilities
                </h5>
              </div>
              <IconButton>
                <DeleteIcon className={isDark ? "text-white" : "text-black"} />
              </IconButton>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
              <p className="text-secondary mb-0 ">Total Spent</p>
              <h5 className={isDark ? "text-white mb-0" : "text-black mb-0"}>
                $450.00
              </h5>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-secondary mb-0 ">Expenses</p>
              <Chip
                color="primary"
                className="text-white"
                size="small"
                label="25"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="card p-4 border-radius"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
              borderRadius: "6px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "pink",
                    borderRadius: "50%",
                  }}
                ></span>
                <h5 className={isDark ? "mb-0 text-white" : "mb-0 text-black"}>
                  Shopping
                </h5>
              </div>
              <IconButton>
                <DeleteIcon className={isDark ? "text-white" : "text-black"} />
              </IconButton>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
              <p className="text-secondary mb-0 ">Total Spent</p>
              <h5 className={isDark ? "text-white mb-0" : "text-black mb-0"}>
                $450.00
              </h5>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-secondary mb-0 ">Expenses</p>
              <Chip
                color="primary"
                className="text-white"
                size="small"
                label="25"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
