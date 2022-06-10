import Joi from "joi";

export async function ValidateToken(req, res, next) {
  const reqBody = req.body;
  const regex = /https?:\/\//;
  const schemaBody = Joi.object({
    url: Joi.string().pattern(regex).required(),
  });

  const validatedSchema = schemaBody.validate(reqBody);

  if (validatedSchema.error) {
    const { error } = validatedSchema;
    return res.status(422).send({ error });
  }
  next();
}
