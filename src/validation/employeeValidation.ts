import Joi from "joi";

const registerValidater = Joi.object({
	name: Joi.string().required(),
	salary: Joi.number().required(),
	position: Joi.string().required(),
	email: Joi.string().email().required().messages({
		"string.empty": "Email field can't empty",
		"string.email": "Invalid Email",
	}),
}).options({ allowUnknown: false });

export const employeeValidate = (user: any) => {
	return registerValidater.validate(user);
};

