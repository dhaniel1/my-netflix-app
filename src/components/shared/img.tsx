import React from "react";

const Img = (props: IpropImg) => {
  const { alt, className, ...restProps } = props;
  return <img alt={alt} className={className} {...restProps}></img>;
};

export default Img;
