import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import control from "../helpers/control.js";

const getAllContacts = async (req, res) => {
  const result = await contactsService.listContacts();
  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const createContact = async (req, res) => {
  const result = await contactsService.addContact(req.body);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.updateContactById(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.removeContact(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const updateFavorites = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.updateContactFavorites(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

export default {
  getAllContacts: control(getAllContacts),
  getOneContact: control(getOneContact),
  createContact: control(createContact),
  updateContact: control(updateContact),
  deleteContact: control(deleteContact),
  updateFavorites: control(updateFavorites),
};
