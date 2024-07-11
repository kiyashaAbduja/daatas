import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import user from "../assets/user.png";

const employees = [
  { id: 1, name: "John Doe", code: "E001", performance: "Excellent" },
  { id: 2, name: "Jane Smith", code: "E002", performance: "Good" },
  { id: 3, name: "John Doe", code: "E001", performance: "Excellent" },
  { id: 4, name: "Jane Smith", code: "E002", performance: "Good" },
  { id: 5, name: "John Doe", code: "E001", performance: "Excellent" },
  { id: 6, name: "Jane Smith", code: "E002", performance: "Good" },
  { id: 7, name: "John Doe", code: "E001", performance: "Excellent" },
  { id: 8, name: "Jane Smith", code: "E002", performance: "Good" },
  { id: 9, name: "John Doe", code: "E001", performance: "Excellent" },
  { id: 10, name: "Jane Smith", code: "E002", performance: "Good" },
  // Add more employee data as needed
];

const DashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state;
  const [filters, setFilters] = useState({
    date: null,
    year: null,
    month: null,
  });

  const handleCardClick = (employeeId) => {
    navigate(`/evaluation/${employeeId}`, {
      state: { filters, employees },
    });
  };

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleLogout = () => {
    // Simulate logout action
    console.log("Logged out");
    navigate("/login");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Welcome, {username}</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        <div className="mb-6 flex space-x-4">
          <DatePicker
            views={["month", "year"]}
            value={filters.date}
            onChange={(newValue) => handleFilterChange("date", newValue)}
            renderInput={(params) => (
              <input {...params.inputProps} className="p-2 border rounded" />
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="relative bg-white rounded-xl shadow-md cursor-pointer overflow-hidden transform transition-transform hover:shadow-xl hover:scale-105 card-bg-animation"
              onClick={() => handleCardClick(employee.id)}
            >
              <div className="bg-animation"></div>
              <div className="content flex flex-col items-center justify-center p-6">
                <img
                  src={user}
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full bg-white shadow-lg mb-4 transform transition-transform hover:rotate-12 hover:scale-110"
                />
                <h2 className="text-xl font-semibold">{employee.name}</h2>
                <h5 className="text-md font-medium text-gray-600">
                  Web Designer
                </h5>
              </div>
              <div className="content bg-gray-200 p-4 mx-5 flex justify-center rounded-lg shadow-inner transition-colors duration-300 ease-in-out hover:bg-gray-300">
                <table className="text-left">
                  <tbody>
                    <tr>
                      <th className="pr-2 font-medium text-gray-700">Code</th>
                      <td className="pr-2">:</td>
                      <td>{employee.code}</td>
                    </tr>
                    <tr>
                      <th className="pr-2 font-medium text-gray-700">
                        Employee Id
                      </th>
                      <td className="pr-2">:</td>
                      <td>845843758754</td>
                    </tr>
                    <tr>
                      <th className="pr-2 font-medium text-gray-700">Date</th>
                      <td className="pr-2">:</td>
                      <td>{employee.code}</td>
                    </tr>
                    <tr>
                      <th className="pr-2 font-medium text-gray-700">
                        Phone No
                      </th>
                      <td className="pr-2">:</td>
                      <td>{employee.code}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default DashboardPage;
