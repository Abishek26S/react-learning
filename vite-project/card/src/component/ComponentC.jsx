// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { NameContext } from "../App";

export const ComponentC = () => {
  const name = useContext(NameContext);
  return (
    <>
      this is component b count {name.count}
      <ComponentD />
    </>
  );
};
