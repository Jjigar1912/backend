import {
  categorySchema,
  categoryDeleteSchema,
  categoryUpdateSchema,
} from "../Helper/validation.js";

const categorySchemaMiddleware = (req, res, next) => {
  const { error } = categorySchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({ error });
  }

  next();
};

const categoryDeleteMiddleware = (req, res, next) => {
  const { error } = categoryDeleteSchema.validate(req.body, {
    abortEarly: false,
  });

  console.log(error);

  if (error) {
    return res.status(400).json(error.details);
  }

  next();
};

const categoryUpdateMiddleware = (req, res, next) => {
  const { error } = categoryUpdateSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json(error.details);
  }
  next();
};

export {
  categorySchemaMiddleware,
  categoryDeleteMiddleware,
  categoryUpdateMiddleware,
};
