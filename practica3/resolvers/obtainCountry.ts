import { Request, Response } from "npm:express@4.18.2";
import DiscModel from "../db/disc.ts";

const obtainCountry = async (req: Request, res: Response) => {
  try {
    const { pais } = req.query;

    if (!pais) {
      res.status(400).json({ error: "n0 hAs metid0 paiS" });
      return;
    }

    const a= new RegExp (pais, "i")
    const discs = await DiscModel.find({ paisImpr: {$a:a} }).exec();

    res.status(200).json(discs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default obtainCountry;

