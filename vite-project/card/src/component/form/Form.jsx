// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const UserForm = () => {
  const userObj = {
    name: "",
    email: "",
    address: "",
    street: "",
    password: "",
  };
  const [userData, setUserData] = useState(userObj);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserData((pre) => ({ ...pre, [name]: value }));
  };
  

  return (
    <form onSubmit={handleOnchange}>
      <div>Email</div>
      <input
        value={userData.email}
        name="email"
        type="email"
        placeholder="Please enter your email"
        onChange={handleOnchange}
        required
      />
      <div>Name</div>
      <input
        value={userData.name.toUpperCase()}
        name="name"
        type="text"
        placeholder="Please enter your email"
        onChange={handleOnchange}
        required
      />
      <div>Address</div>
      <input
        value={userData.address}
        name="address"
        type="text"
        placeholder="Please enter your email"
        onChange={handleOnchange}
        required
      />
      <div>Street</div>
      <input
        value={userData.street}
        name="street"
        type="text"
        placeholder="Please enter your email"
        onChange={handleOnchange}
        required
      />
      <div>Password</div>
      <input
        value={userData.password}
        name="password"
        type="password"
        placeholder="Please enter your password"
        onChange={handleOnchange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;