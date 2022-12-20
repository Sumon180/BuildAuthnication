import { Request, Response } from "express";
import { Contact } from "../entities/Contact";

//  find all the records
export const getContact = async (req: Request, res: Response) => {
  const allUsers = await Contact.find();
  res.send(allUsers);
};

export const postContact = async (req: Request, res: Response) => {
  let contactINFO: Contact = new Contact();
  contactINFO.name = req.body["name"];
  contactINFO.email = req.body["email"];
  contactINFO.contact = req.body["contact"];
  const userInsert = await contactINFO.save();
  res.json(userInsert);
};

export const deleteContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  await Contact.delete(id);
  res.send("deleted");
};

export const updateContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  const allRecords = await Contact.findOneBy({
    id: parseInt(id),
  });
  res.send(allRecords);
};

export const putContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  await Contact.update(id, {
    name: req.body["name"],
    email: req.body["email"],
    contact: req.body["contact"],
  });

  res.json({
    status: 200,
    message: "success",
  });
};
