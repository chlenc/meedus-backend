import path from "path";
import { config } from "dotenv";
import { loadVar } from "./utils";

config({ path: path.join(__dirname, "../.env") });

export const mongoUrl = loadVar("MONGO_URL");
export const validatorSeed = loadVar("VALIDATOR_SEED");
export const chainId = loadVar("CHAIN_ID", true) ?? "W";
export const port = loadVar("PORT", true);
