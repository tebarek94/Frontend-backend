import React, { useState } from "react";
import axios from "axios";

const InsertData = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    try {
      // Send POST request to the backend
      await axios.post("http://localhost:5000/insert", {
        name,
        address,
      });

      // Set success message
      setResponseMessage("Data inserted successfully");
    } catch (error) {
      // Handle error
      console.error("There was an error inserting the data:", error);
      setResponseMessage("Error inserting data");
    }
  };

  return (
    <div>
      <h2>Insert Data into Customers Table</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Insert</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default InsertData;
