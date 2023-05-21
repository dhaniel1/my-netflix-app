import React from "react";

const Input = (props: IpropInput) => {
  const { error, label, ...restProps } = props;

  return (
    <div>
      {label && <label htmlFor={restProps.id}>{label}</label>}
      <input {...restProps} />
      {error && (
        <small id="emailHelp" className="form-text text-muted">
          {error}
        </small>
      )}
      {/* {error && <p className="text-danger">{error}</p>} */}
    </div>
  );
};

export default Input;
