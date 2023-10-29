import mongoose from "npm:mongoose@7.6.3"

export enum formatoD{
  LP = 'LP',
  CD = 'CD',
  single = 'single',
  cassette = 'cassette',
  reel_to_reel = 'reel_to_reel',
  minidisc = 'minidisc', 
  videocd = 'videocd',
  vinyl = 'vinyl'
}

export type Disco={
    nombre:string,
    autor: string,
    formato: formatoD,
    matriz?:string,
    paisImpr:string,
    portada:string,
    id: mongoose.Types.ObjectId
}
