import express from "express";
import { isEmpty } from "../helpers/isEmpty.js";
import { validateId } from "../helpers/validateId.js";
import contactsControllers from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", contactsControllers.getOneContact);

contactsRouter.delete("/:id", validateId, contactsControllers.deleteContact);

contactsRouter.post(
  "/",
  isEmpty,
  validateBody(createContactSchema),
  contactsControllers.createContact
);

contactsRouter.put(
  "/:id",
  validateId,
  isEmpty,
  validateBody(updateContactSchema),
  contactsControllers.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  validateId,
  isEmpty,
  validateBody(updateFavoriteSchema),
  contactsControllers.updateFavorites
);

export default contactsRouter;
