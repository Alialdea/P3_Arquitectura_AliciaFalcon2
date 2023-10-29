import { Request, Response } from "npm:express@4.18.2";
import DiscModel from "../db/disc.ts";

const obtainID = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
      res.status(400).json({ error: "n0 hAs metid0 la 1D" });
      return;
    }

    const discs = await DiscModel.find({ id: id }).exec();

    res.status(200).json(discs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default obtainID;