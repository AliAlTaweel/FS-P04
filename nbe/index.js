const config = require("./utils/config");
const logger = require("./utils/logger");
const app = require("./app");
const port = config.PORT;
app.listen(port, () => logger.info(`Server running on port ${port}`));
