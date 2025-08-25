import React from "react";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Select, Switch } from "antd";

const { Option } = Select;
const currencyOptions = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "GBP", name: "British Pound" },
  { code: "KHR", name: "Cambodian Riel" },
  // Add more as needed
];
const Profile = ({ isDark, value, onChange }) => {
  return (
    <div className="vh-100">
      <div>
        <h2>Profile Settings</h2>
        <p className="mb-0 text-secondary">
          Manage your account settings and preferences
        </p>
      </div>
      <div className="mt-4 row gy-3 gy-lg-0">
        <div className="col-12 col-lg-6">
          <div
            className="card p-4 border-radius"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <h4>Personal Information</h4>
            <div className="mt-3">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    placeholder="e.g., Ieng kimlong"
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
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    placeholder="e.g., Kimlong@gmail.com"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
                      fontSize: "14px",
                    }}
                    type="email"
                    className="form-control mt-1 py-2"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Default Currency
                  </label>
                  <Select
                    className={isDark ? "dark" : "white"}
                    style={{
                      width: "100%",
                    }}
                    showSearch
                    placeholder="Select currency"
                    optionFilterProp="children"
                    value={value}
                    onChange={onChange}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                  >
                    {currencyOptions.map((currency) => (
                      <Option key={currency.code} value={currency.code}>
                        {currency.code} - {currency.name}
                      </Option>
                    ))}
                  </Select>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div
            className="card p-4 border-radius"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              height: "360.4px",
            }}
          >
            <h4>Preferences</h4>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-0">Email Notifications</p>
                <p className="mb-0 text-secondary">
                  Receive email updates about your expenses
                </p>
              </div>
              <div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
