import React, { useState } from "react";

interface FarmField {
  label: string;
  fieldType: string;
  fieldName: string;
  options?: string[];
}

interface DynamicFormProps {
  fields: FarmField[];
  onSubmit: (formData: Record<string, any>) => void;
}

const DynamicFarmForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (e.target.type === "checkbox" && e.target instanceof HTMLInputElement) {
      // Handle checkbox differently for HTMLInputElement
      const currentValue = formData[name] || [];
      const updatedValue = e.target.checked
        ? [...currentValue, value]
        : currentValue.filter((item: string) => item !== value);

      setFormData({ ...formData, [name]: updatedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        {fields.map((field) => (
          <div key={field.fieldName} className="mb-3">
            <label className="form-label">{field.label}:</label>
            {field.fieldType === "text" && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name={field.fieldName}
                  value={formData[field.fieldName] || ""}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {field.fieldType === "email" && (
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name={field.fieldName}
                  value={formData[field.fieldName] || ""}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {field.fieldType === "password" && (
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  name={field.fieldName}
                  value={formData[field.fieldName] || ""}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {field.fieldType === "radio" && (
              <div className="mb-3">
                {field.options?.map((option) => (
                  <div key={option} className="form-check form-check-inline">
                    <input
                      type="radio"
                      name={field.fieldName}
                      value={option}
                      checked={formData[field.fieldName] === option}
                      onChange={handleInputChange}
                      id={`${field.fieldName}-${option}`}
                    />
                    <label className="form-check-label" htmlFor={`${field.fieldName}-${option}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
            {field.fieldType === "checkbox" && (
              <div className="mb-3">
                {field.options?.map((option) => (
                  <div key={option} className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      name={field.fieldName}
                      value={option}
                      checked={formData[field.fieldName]?.includes(option) || false}
                      onChange={handleInputChange}
                      id={`${field.fieldName}-${option}`} // Add an ID for the input
                    />
                    <label className="form-check-label" htmlFor={`${field.fieldName}-${option}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
            {field.fieldType === "select" && (
              <div className="mb-3">
                <select
                  className="form-select"
                  name={field.fieldName}
                  value={formData[field.fieldName] || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {field.fieldType === "date" && (
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  name={field.fieldName}
                  value={formData[field.fieldName] || ""}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {field.fieldType === "tel" && (
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name={field.fieldName}
                  value={formData[field.fieldName] || ""}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        ))}
        <div className="text-center pt-10">
          <button type="submit" className="btn btn-primary">
            Create Farm
          </button>
        </div>
      </div>
    </form>
  );
};

export default DynamicFarmForm;
