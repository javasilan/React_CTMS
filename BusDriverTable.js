
import React from 'react';

const BusDriverTable = ({ drivers }) => {
  return (
    <div>
      <h2>Bus Drivers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.name}</td>
              <td>{driver.mobileNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusDriverTable;
