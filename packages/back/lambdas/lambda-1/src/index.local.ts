import { handle } from "./main";

const test = "local";

async function local() {
  console.log("tata");
  return handle(test);
}

while (true) {
  local();
}
