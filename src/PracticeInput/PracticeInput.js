import { useState } from "react";
import { PracticeComponent } from "./PracticeComponent";
export const PracticeInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const inputHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  console.log(email);
  return (
    <div>
      <center>
        <h1>ContactUs</h1>
        <PracticeComponent
          type="text"
          name="username"
          value={name}
          ChangeHandler={inputHandler}
          label={"UserName"}
        />
        <PracticeComponent
          type="email"
          name="email"
          value={email}
          ChangeHandler={emailHandler}
          label={"Email"}
        />
      </center>
    </div>
  );
};
