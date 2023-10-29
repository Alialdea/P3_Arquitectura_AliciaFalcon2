import { Request, Response } from "npm:express@4.18.2";
import DiscModel from "../db/disc.ts";

const obtainName = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.query;

    if (!nombre) {
      res.status(400).json({ error: "n0 hAs metid0 n0mbr3" });
      return;
    }

    //para que den igual las mayusculas/min
    //fuente: https://www.w3schools.com/jsref/jsref_regexp_i.asp
    const a= new RegExp (nombre, "i")

    const discs = await DiscModel.find({ nombre: {$a:a} }).exec()
    res.status(200).json(discs);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default obtainName;