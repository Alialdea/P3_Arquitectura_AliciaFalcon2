import { Request, Response } from "npm:express@4.18.2";
import DiscModel from "../db/disc.ts";

const addDisc = async (req: Request, res: Response) => {
  try {
    const { nombre, autor, formato,  paisImpr, portada } = req.body;
    const matriz = req.body.matriz

    if (!nombre || !autor || !formato || !paisImpr || !portada) {
      res.status(400).send("tAn faltaU dAt0s");
      return;
    }

    const alreadyExists = await DiscModel.findOne({ nombre }).exec();
    if (alreadyExists) {
      res.status(400).send("El dIsc0 ya ExiStE");
      return;
    }

    const newDiscData:any = { nombre, autor, formato, paisImpr, portada }

    if (matriz) {
      newDiscData.matriz = matriz;
    }

    const newDisc = new DiscModel(newDiscData);
    await newDisc.save();

    res.status(200).json(newDisc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default addDisc;
