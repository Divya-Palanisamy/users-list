import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classess from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isError, setIsError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: "Invalid Input",
        msg: "Pleade enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsError({
        title: "Invalid Age",
        msg: "Pleade enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setIsError(null);
  };

  return (
    <div>
      {isError && (
        <ErrorModal
          onConfirm={errorHandler}
          title={isError.title}
          msg={isError.msg}
        />
      )}

      <Card className={classess.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            value={enteredAge}
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
