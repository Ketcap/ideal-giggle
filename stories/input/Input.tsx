import React, { useState } from "react";

import { Input as StyledInput } from "../../src";

export const Input = (): JSX.Element => {
  const [value, setValue] = useState("");
  return (
    <div style={{ display: "grid", gap: "32px" }}>
      <StyledInput
        id="someinput"
        label="Default"
        inputSize="medium"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <StyledInput
        id="someinput"
        label="Value"
        inputSize="medium"
        value="With Value"
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <StyledInput
        id="someinput"
        label="Success"
        inputSize="medium"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        success={{ message: "Success message!" }}
      />
      <StyledInput
        id="someinput"
        label="With Error"
        inputSize="medium"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        error={{ message: "Uh oh. Something went wrong!" }}
      />
      <StyledInput
        id="someinput"
        label="Disabled"
        inputSize="medium"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        disabled
      />
    </div>
  );
};
