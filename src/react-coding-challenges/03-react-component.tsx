/**
 * Challenge: React Data Fetching Component
 *
 * Problem:
 * Create a React component that fetches and displays a list of users fetched from https://jsonplaceholder.typicode.com/users.
 * The component should:
 * 1. Allow sorting by name or email
 * 2. Allow filtering by name
 * 3. Implement proper TypeScript typing
 * 4. Handle loading states
 * 5. Handle error states
 *
 * Use React hooks and demonstrate best practices.
 *
 * Time: 25 minutes
 */

import React, { useState, useEffect } from "react";

// Define types for the data
interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

// TODO: Implement the UserList component
const UserList: React.FC = () => {
  return (
    <div>
      <h1>User List</h1>
      <p>Implement your solution here!</p>
    </div>
  );
};

export default UserList;
