import Contact from "../models/Contact";

export const listContacts = () => Contact.find({});

export const getContactById = (contactId) =>
  Contact.findById({ _id: contactId });

export const addContact = (data) => Contact.create(data);

export const updateContactById = (id, data) => {};

export const removeContact = (contactId) => Contact.remove({ _id: contactId });
