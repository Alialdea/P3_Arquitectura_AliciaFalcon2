import { Request, Response } from "npm:express@4.18.2";
import DiscModel from "../db/disc.ts";

const deleteDisc = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const disc = await DiscModel.findOneAndDelete({ id }).exec();
    if (!disc) {
      res.status(404).send("DisC0 not found");
      return;
    }
    res.status(200).send("dIsc0 deleted");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteDisc;