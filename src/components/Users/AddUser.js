import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const changeUserNameHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  return (
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
  );
};

export default AddUser;
