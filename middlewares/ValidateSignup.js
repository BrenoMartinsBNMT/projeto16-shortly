import Joi from "joi";

export async function ValidateBodySignup(req, res, next) {
  const reqBody = req.body;

  let { password, confirmPassword } = reqBody;

  if (password !== confirmPassword) {
    return res.send("senhas não conferem!");
  }

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validateSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(regexEmail).required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  });

  const infosValidated = validateSchema.validate(reqBody);

  if (infosValidated.error) {
    return res.sendStatus(422);
  }

  next();
}
