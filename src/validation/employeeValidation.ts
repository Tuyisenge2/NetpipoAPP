import Joi from "joi";

const registerValidater = Joi.object({
  name: Joi.string(),
  salary: Joi.number().integer().strict().max(999999999).messages({
    "number.max": "Salary must not exceed 9 digits",
  }),
  position: Joi.string(),
  email: Joi.string().email().messages({
    "string.empty": "Email field can't be empty",
    "string.email": "Invalid Email",
  }),
}).options({ allowUnknown: false });

export const employeeValidate = (user: any) => {
  if (user.salary) {
    user.salary = Number(user.salary);
  }
  return registerValidater.validate(user);
};
