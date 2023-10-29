import mongoose from "npm:mongoose@7.6.3";
import { Disco } from "../types.ts";
import { formatoD } from "../types.ts";

const Schema = mongoose.Schema;

const discSchema = new Schema(
  {
    nombre:{type: String, required: true},
    autor: {type: String, required: true},
    formato: {type: String,formatoD, required: true},
    matriz: {type: String, required: false},
    paisImpr:{type: String, required: true},
    portada:{type: String, required: true},
  },
  { timestamps: true }//realizar un seguimiento de la actividad de los documentos
);

export type DiscModelType = mongoose.Document & Omit<Disco, "id">;

export default mongoose.model<DiscModelType>("Disco", discSchema);