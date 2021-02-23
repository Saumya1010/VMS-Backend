const Joi = require("joi");

const createVisitor = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string().min(5).max(10).required(),
  visitType: Joi.string().valid("personal", "business"),
  photo: Joi.string().required(),
  host: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
  }),
});

module.exports = { createVisitor };
