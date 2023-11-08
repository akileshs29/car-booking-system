import React from 'react';
import '../styles/index1.css';
const UserDetails = ({ user }) => {
  return (
    <div>
      <h3>User Data:</h3>
      <p>First Name: </p>
      <p>Last Name: </p>
      <p>Email: </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default UserDetails;
