// src/App.tsx

import React from "react";
import "./App.css";
import DynamicForm from "./DynamicForm";

const App: React.FC = () => {
  const farmFields = [
    { label: "First Name", fieldType: "text", fieldName: "firstName" },
    { label: "Last Name", fieldType: "text", fieldName: "lastName" },
    {
      label: "Gender",
      fieldType: "radio",
      fieldName: "gender",
      options: ["Male", "Female"],
    },
    {
      label: "Crops",
      fieldType: "checkbox",
      fieldName: "crops",
      options: ["Wheat", "Corn", "Rice", "Barley"],
    },
    {
      label: "Country",
      fieldType: "select",
      fieldName: "country",
      options: ["USA", "Canada", "UK", "Australia"],
    },
    { label: "Email", fieldType: "email", fieldName: "email" },
    { label: "Phone Number", fieldType: "tel", fieldName: "phoneNumber" },
    { label: "Date of Birth", fieldType: "date", fieldName: "dateOfBirth" },
  ];

  const handleFarmCreation = (formData: Record<string, any>) => {
    console.log("Farm Created:", formData);
  };

  return (
    <div className="App">
      <h1 className="text-center">Create a Farm</h1>
      <DynamicForm fields={farmFields} onSubmit={handleFarmCreation} />
    </div>
  );
};

export default App;
