type ErrorParser = { [key: string]: any };

export const errorParser = (
  errors: ErrorParser,
  touched: ErrorParser,
  name: string
) => {
  return (touched[name] && errors[name]) || "";
};

export const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};
