import { Request, Response } from "npm:express@4.18.2";
import DiscModel from "../db/disc.ts";

const obtainDiscs = async (_req: Request, res: Response) => {
    try {
        const discs = await DiscModel.find({}).exec();
    
        res.status(200).json(discs);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export default obtainDiscs;