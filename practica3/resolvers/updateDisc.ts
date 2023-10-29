import { Request, Response } from "npm:express@4.18.2";
import DiscModel from "../db/disc.ts";

const updateDisc = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {nombre, autor, formato,  paisImpr, portada, matriz} = req.body;
    

    if (!nombre || !autor || !formato || !paisImpr || !portada) {
      res.status(400).send("tAn faltaU dAt0s");
      return;
    }

    const datos: any ={
        nombre,
        autor,
        formato,
        paisImpr,
        portada,
    }

    if (matriz) {
        datos.matriz = matriz;
    }

    const updatedDisc = await DiscModel.findOneAndUpdate(
      { id },
      datos,
      { new: true }
    ).exec();

    if (!updatedDisc) {
      res.status(404).send("Disc0 n0t f0Und");
      return;
    }

    res.status(200).send(updatedDisc);
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default updateDisc;