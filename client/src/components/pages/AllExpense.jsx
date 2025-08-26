import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import { DatePicker, Space } from "antd";
import "./allExpense.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import NoData from "../NoData";
import { ToastContainer, toast } from "react-toastify";

const apiUrl =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
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
const AllExpense = ({ isDark }) => {
  const [data, setData] = useState([]);
  const [selectId, setSelectId] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${apiUrl}/expense/get-all-category`, {
          withCredentials: true,
        });
        setCategoryData(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCategory();
  }, []);
  useEffect(() => {
    const fetchAllExpense = async () => {
      try {
        const response = await axios.get(`${apiUrl}/expense/get-expense`, {
          withCredentials: true,
        });
        setData(response.data.expense_record);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllExpense();
  }, [data]);
  const addExpense = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${apiUrl}/expense/add-expense`,
        {
          amount: amount,
          description: description,
          category_id: category,
          date: date,
        },
        {
          withCredentials: true,
        }
      );
      handleClose();
      toast.success("Creating Expense Successfully..", {
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const filterData = data.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h2>All Expenses</h2>
          <p className="mb-0 text-secondary">
            Manage and track all your expenses
          </p>
        </div>
        <div>
          <Button
            onClick={handleOpen}
            startIcon={<AddIcon />}
            variant="contained"
          >
            Add Expense
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
              <Box className="z-1" sx={style}>
                <div>
                  <h5>Add New Expense</h5>
                  <form className="mt-3">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Amount
                      </label>

                      <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "white",
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
                          fontSize: "13px",
                        }}
                        type="number"
                        className="form-control mt-1 py-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Description
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "white",
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
                          fontSize: "13px",
                        }}
                        className="form-control mt-1 "
                        id="exampleFormControlTextarea1"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        defaultValue=""
                        className="form-select custom-select-style mt-1 py-2"
                        aria-label="Default select example"
                      >
                        <option defaultValue value="" disabled hidden>
                          Select an option
                        </option>
                        {categoryData.map((data) => (
                          <option value={data.category_id}>
                            {data.category_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Date
                      </label>
                      <Space direction="vertical" className=" w-100 mt-1 ">
                        <DatePicker
                          className="py-2"
                          style={{ width: "100%" }}
                          format={{
                            format: "YYYY-MM-DD",
                            type: "mask",
                          }}
                          onChange={(date, dateString) => setDate(dateString)}
                        />
                      </Space>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-2">
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
                      <Button
                        onClick={addExpense}
                        className="ms-3 text-black"
                        variant="contained"
                      >
                        Add Expense
                      </Button>
                    </div>
                  </form>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
      <div className=" my-4">
        <form>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="col-12 "
            variant="outlined"
            sx={{
              bgcolor: isDark ? "#020817" : "#EDEDED",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
              borderRadius: "6px",
              input: {
                color: isDark ? "white" : "black",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: isDark ? "white" : "#123a8b",
                  borderRadius: "6px",
                },
              },
            }}
            placeholder="Search expenses..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-secondary" />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
      <div
        className="col-12 border-radius p-4 "
        style={{
          backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
          borderRadius: "6px",
        }}
      >
        <h4>Recent Expenses</h4>
        <div className="mt-4 all-expense-list" style={{ minHeight: "400px" }}>
          {filterData.length === 0 ? (
            <div
              style={{
                height: "400px",
              }}
            >
              <NoData />
            </div>
          ) : (
            <ul>
              {filterData.map((data) => {
                return (
                  <li
                    key={data.id}
                    className={`d-flex align-items-center justify-content-between ${
                      isDark ? "dark-li" : "light-li"
                    }`}
                    style={{
                      backgroundColor: isDark ? "transparent" : "#D5D4D4BA",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <span
                        className="me-3"
                        style={{
                          width: "14px",
                          height: "14px",
                          backgroundColor: `${data.category_color}`,
                          borderRadius: "50%",
                        }}
                      ></span>
                      <div>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "17px",
                          }}
                        >
                          {data.description}
                        </p>
                        <div className="d-flex ">
                          <p className="pe-2 mb-0 text-secondary">
                            {new Date(data.date).toLocaleDateString()}
                          </p>
                          <Chip
                            size="small"
                            sx={{
                              color: isDark ? "white" : "#020817",
                              backgroundColor: isDark
                                ? "#28364DC1"
                                : "#65676B58",
                            }}
                            label={data.category_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <h5 className="mb-0">${data.amount}</h5>
                      <IconButton
                        onClick={() => {
                          setSelectId(data.id);
                          handleOpen2();
                        }}
                        className="mx-3"
                        style={{
                          color: isDark ? "white" : "black",
                        }}
                      >
                        <EditNoteIcon />
                      </IconButton>
                      <IconButton
                        style={{
                          color: isDark ? "white" : "black",
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open2}
            onClose={handleClose2}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open2}>
              <Box className="z-1" sx={style}>
                <div>
                  <h5>Add New Expense</h5>
                  <form className="mt-3">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Amount
                      </label>

                      <input
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "white",
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
                          fontSize: "13px",
                        }}
                        type="number"
                        className="form-control mt-1 py-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Description
                      </label>
                      <textarea
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "white",
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
                          fontSize: "13px",
                        }}
                        className="form-control mt-1 "
                        id="exampleFormControlTextarea1"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Category
                      </label>
                      <select
                        defaultValue=""
                        className="form-select custom-select-style mt-1 py-2"
                        aria-label="Default select example"
                      >
                        <option defaultValue value="" disabled hidden>
                          Select an option
                        </option>
                        <option value="1">Gym</option>
                        <option value="2">Transportation</option>
                        <option value="3">School</option>
                        <option value="4">Phone bill</option>
                        <option value="5">Food</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Date
                      </label>
                      <Space direction="vertical" className=" w-100 mt-1 ">
                        <DatePicker
                          className="py-2"
                          style={{ width: "100%" }}
                          format={{
                            format: "DD-MMM-YYYY",
                            type: "mask",
                          }}
                          onChange={onChange}
                        />
                      </Space>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-2">
                      <Button
                        onClick={handleClose2}
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
                        }}
                        variant="outlined text-white"
                      >
                        Cancel
                      </Button>
                      <Button className="ms-3 text-black" variant="contained">
                        Update Expense
                      </Button>
                    </div>
                  </form>
                </div>
              </Box>
            </Fade>
          </Modal>
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

export default AllExpense;
