<<<<<<< HEAD
<<<<<<< HEAD
import { categorySchema , categoryUpdateSchema , categoryDeleteSchema } from "../Helper/validation.js";
=======
=======
>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a
import {
  categorySchema,
  categoryDeleteSchema,
  categoryUpdateSchema,
} from "../Helper/validation.js";
<<<<<<< HEAD
>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a
=======
>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a

const categorySchemaMiddleware = (req, res, next) => {
  const { error } = categorySchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({ error });
  }
<<<<<<< HEAD

  next();
};

const categoryDeleteMiddleware = (req, res, next) => {
  const { error } = categoryDeleteSchema.validate(req.body, {
    abortEarly: false,
  });

  console.log(error);

<<<<<<< HEAD
const categoryDeleteMiddleware = (req, res, next) => {

    const { error } = categoryDeleteSchema.validate(req.body, { abortEarly: false });

    if (error) {

      return res.status(400).json(error.details);

    }
  
    next();

};
  
const categoryUpdateMiddleware = (req, res, next) => {

  const { error } = categoryUpdateSchema.validate(req.body, { abortEarly: false });
  
  if (error) {
  
    return res.status(400).json(error.details);
  
  }

  req.body.name = req.body.name.trim() ; 

  req.body.image = req.body.image.trim() ; 

  next();

};

export  {

    categorySchemaMiddleware , 
    categoryDeleteMiddleware,
    categoryUpdateMiddleware

  }; 
=======
=======

  next();
};

const categoryDeleteMiddleware = (req, res, next) => {
  const { error } = categoryDeleteSchema.validate(req.body, {
    abortEarly: false,
  });

  console.log(error);

>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a
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
<<<<<<< HEAD
>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a
=======
>>>>>>> 2b178facd9ac08563639ffb4629fbfbfa46f492a
