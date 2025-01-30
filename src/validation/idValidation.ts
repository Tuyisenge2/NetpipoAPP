import Joi from "joi";

const idValidator = Joi.object({
  id: Joi.string().uuid().messages({
    "string.empty": "ID field can't be empty",
    "string.guid": "Invalid UUID format",
  }),
}).options({ allowUnknown: false });

export const validateUUID = (idObject: any) => {
  return idValidator.validate(idObject);
};
