import React from "react";

const Button = (props: IpropBtn) => {
  const { styles, title, children, ...restProps } = props;

  return (
    <button {...restProps} className={`btn ${styles}`}>
      {children}
      <p style={{ padding: "0", margin: "0" }}>{title}</p>
    </button>
  );
};

export default Button;
