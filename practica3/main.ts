import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import addDisc from "./resolvers/addDisc.ts";
import deleteDisc from "./resolvers/deleteDisc.ts";
import obtainCountry from "./resolvers/obtainCountry.ts";
import obtainDiscs from "./resolvers/obtainDiscs.ts";
import obtainFormat from "./resolvers/obtainFormat.ts";
import obtainID from "./resolvers/obtainID.ts";
import obtainName from "./resolvers/obtainName.ts";
import updateDisc from "./resolvers/updateDisc.ts";


import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);

const app = express();
app.use(express.json());
app
  .get("/obtainDiscs", obtainDiscs)
  .get("/obtainID/:id",obtainID)
  .get("/obtainName/:nombre",obtainName)
  .get("/obtainFormat/:formato", obtainFormat)
  .get("/obtainCountry/:paisImpr", obtainCountry)

  .post("/addDisc", addDisc)

  .put("/updateDisc/:id", updateDisc)

  .delete("/deleteDisc/:id", deleteDisc)
  

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
