import React from "react";

import { Label, StyledInput, Span, InputWrapper } from "componets/Input/Styled";

const Input = ({
  width,
  placeholder,
  onChange,
  type,
  id,
  name,
  value = "",
}) => {
  return (
    <InputWrapper>
      <Label>
        <StyledInput
          width={width}
          placeholder="&nbsp;"
          onChange={onChange}
          type={type}
          id={id}
          name={name}
          value={value}
        />
        <Span>{placeholder}</Span>
      </Label>
    </InputWrapper>
  );
};

export default Input;
