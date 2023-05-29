import React, { useState } from "react";

const T = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    textArea: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new instance of FormData
    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("text", formData.textArea);
    console.log(formData);

    // Perform your form submission or data handling here
    // For example, you can make an AJAX request with the form data
    // using fetch() or an HTTP client library like Axios.

    // Reset the form after submission
    setFormData({
      firstName: "",
      textArea: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        textArea
        <textarea
          wrap="hard"
          style={{ wordBreak: "break-word" }}
          name="textArea"
          value={formData.textArea}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default T;
