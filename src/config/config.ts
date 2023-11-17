require("dotenv/config");

const baseURL = process.env.CHAINSITE_BASE_URL;
const PORT = process.env.PORT;

export { PORT, baseURL };
