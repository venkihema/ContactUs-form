import { useState } from "react";
import { InputComponent } from "./Components/InputComponent";
import "./ContactUs.css";
export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setNumber(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, number, address);
  };
  return (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <div className="Header">
          <h1>ContactUs</h1>
        </div>
        <InputComponent
          type="text"
          placeholder="Enter your Name"
          label={"Name"}
          InputValue={name}
          inputChangeHandler={nameChangeHandler}
        />
        <InputComponent
          InputValue={email}
          type="email"
          placeholder="Enter your Email"
          label={"Email"}
          inputChangeHandler={emailChangeHandler}
        />
        <InputComponent
          InputValue={number}
          type="number"
          placeholder="Enter your PhoneNumber"
          label={"PhoneNumber"}
          inputChangeHandler={numberChangeHandler}
        />
        <div className="infoField">
          <label style={{ width: "30%" }}>Address</label>
          <textarea style={{}} onChange={addressHandler}></textarea>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
          }}
        >
          <input
            type={"submit"}
            style={{ textAlign: "center", width: "100px", height: "40px" }}
          />
        </div>
      </form>
    </div>
  );
};
