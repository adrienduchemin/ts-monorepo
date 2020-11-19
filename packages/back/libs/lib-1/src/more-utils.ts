import { v4 as uuidv4 } from "uuid";

export const generateUUID = (str?: string) => uuidv4() + str;
