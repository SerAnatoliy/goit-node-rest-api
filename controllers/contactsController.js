import * as contactsServices from "../services/contactsService.js";
import HttpError from "../helpers/HttpError.js";
import control from "../helpers/control.js";

const getAllContacts = (req, res) => {
    const contacts = contactsServices.getAllContacts();
    res.json(contacts);
};

const getOneContact = (req, res) => {
    const { id } = req.params;
    const contact = contactsServices.getContactById(id);
    if (!contact) {
        throw HttpError(404);
    }
    res.json(contact);
};

const deleteContact = (req, res) => {
    const { id } = req.params;
    const contact = contactsServices.removeContact(id);
    if (!contact) {
        throw HttpError(404);
    }
    res.json(contact);
};

const createContact = (req, res) => {
    const contact = contactsServices.addContact(req.body);
    res.status(201).json(contact);
};

const updateContact = (req, res) => {
    const { id } = req.params;
    const contact = contactsServices.updateContact(id, req.body);
    if (!contact) {
        throw HttpError(404);
    }
    res.json(contact);
};

export default {
  getAllContacts: control(getAllContacts),
  getOneContact: control(getOneContact),
  createContact: control(createContact),
  updateContact: control(updateContact),
  deleteContact: control(deleteContact),
};