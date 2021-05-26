import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const changeUserNameHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please make sure that name and age are not empty",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age number > 0",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={changeUserNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={changeAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
