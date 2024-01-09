const config = require("./src/config/config");
const app = require("./src/app");

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`sarver in running at http://localhost:${PORT}`);
});
