import { Request, Response } from "npm:express@4.18.2";
import DiscModel from "../db/disc.ts";

const obtainFormat = async (req: Request, res: Response) => {
  try {
    const { formato } = req.query;

    if (!formato) {
      res.status(400).json({ error: "n0 hAs metid0 el Form4t0" });
      return;
    }

    const discs = await DiscModel.find({ formato: formato }).exec();

    res.status(200).json(discs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default obtainFormat;