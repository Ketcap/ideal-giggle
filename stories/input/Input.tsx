import React, { useState } from "react";

import { Input as StyledInput } from "../../src";

export const Input = (): JSX.Element => {
  const [value, setValue] = useState("");
  return (
    <StyledInput
      id="someinput"
      label="hello"
      inputSize="medium"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  );
};
