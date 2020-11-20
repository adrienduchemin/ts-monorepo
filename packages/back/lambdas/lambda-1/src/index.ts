import { Context, Handler, APIGatewayProxyEvent } from "aws-lambda";
import { handle } from "./main";

const instanceId: string = Math.random().toString(16).slice(2);

console.log("Starting lambda", { instanceId });

let init = false;

async function initLambda(): Promise<void> {
  console.log("Init lambda", { instanceId });
  try {
    //init some stuff
  } catch (err) {
    throw err;
  }
  init = true;
}

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  if (!init) {
    await initLambda();
  }
  console.log("Handling lambda", { event, context, instanceId });
  if (event.body === null) {
    return "why null ?";
  }
  return handle(JSON.parse(event.body));
};
