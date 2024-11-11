import React, { useEffect, useState } from "react";

function GetData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Add state for handling errors

  useEffect(() => {
    fetch("http://localhost:5000/api/db/") // Make sure the endpoint is correct
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message)); // Handle errors
  }, []); // Empty dependency array to run only once when the component is mounted

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an error
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.name}>
              <td>{d.name}</td>
              <td>{d.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetData;
