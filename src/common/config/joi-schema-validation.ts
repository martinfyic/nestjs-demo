import * as Joi from 'joi';

export const JoiSchemaValidation = Joi.object({
  MONGODB_URL: Joi.required(),
  PORT: Joi.number().default(3001),
  DEFAULT_LIMIT: Joi.number().default(5),
});
