import React, { useState, useCallback } from "react";

let timeout = null;

const DebounceInput = ({ onChangeFn, delay = 300, ...rest }) => {
  const [value, setValue] = useState(rest.value || "");

  const onChange = useCallback(
    ({ target }) => {
      setValue(target.value);
      clearTimeout(timeout);
      timeout = setTimeout(() => onChangeFn(target.value), delay);
    },
    [delay, onChangeFn]
  );

  return <input {...rest} value={value} onChange={onChange} />;
};

export default DebounceInput;
