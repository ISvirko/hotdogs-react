import axios from "axios";

export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.price) {
    errors.price = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.image) {
    errors.image = "Required";
  }
  return errors;
};

export const asyncValidate = async ({ name }) => {
  try {
    return await axios(`/hotdogs/${name}`);
  } catch (error) {
    throw { name: "Name already exists" };
  }
};
