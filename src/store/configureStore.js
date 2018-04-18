/*import { configureStore as dev } from "./configureStore.dev";
import { configureStore as prod } from "./configureStore.prod";

const configureStore = process.env.NODE_ENV !== "production" ? dev : prod;

export { configureStore };*/
if (process.env.NODE_ENV === "production") {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
