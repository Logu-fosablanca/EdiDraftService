import { EdiDraft } from "../models/EdiDraft.js";
import { create } from "./createController.js";

export async function createDraft(req, res) {
  let draft = req.body;

  draft["Username"] = req.session.user;

  console.log(draft);


  let data= await create(draft,res);

  console.log(data);
  res.status(200).send(data);
}

async function create(req, res) {
  console.log(req.body);
  let response = null;
  let ediDraft = new EdiDraft(req.body);

  try {
    const data = await ediDraft.save();

    if (data === null) {
      response = generateResponse(false, "No record ", data);
    } else if (data !== null) {
      response = generateResponse(true, "Draft created successfully", data);
    }
  } catch (err) {
    response = generateResponse(false,"There occured some error : " + err.err,data);
  }
  return response;
}
