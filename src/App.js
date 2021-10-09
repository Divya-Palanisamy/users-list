import React from "react";
import { useState } from "react/cjs/react.development";
import UserForm from "./components/Users/UserForm";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevList) => {
      return [...prevList, { name, age, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
